"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CldUploadButton } from "next-cloudinary";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";

import { updateCloudinaryProfilePhoto } from "@/actions/settings";

import { SettingsProfileSchema } from "@/schemas";

import type { Types } from "mongoose";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { UserAvatar } from "../shared/user-avatar";
import { SettingsHeader, SettingsSeparator } from ".";
import { useToast } from "../ui/use-toast";
import { useSettings } from "@/hooks/useSettings";

export const ProfileSettingsTab = () => {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const { data: session, update } = useSession({
    required: true,
  });

  const settings = useSettings();
  const image = session?.user.image;
  const _id = session?.user.id;

  const form = useForm<z.infer<typeof SettingsProfileSchema>>({
    resolver: zodResolver(SettingsProfileSchema),
    defaultValues: {
      username: "",
    },
  });

  const onCloudinarySuccess = async (
    _id: Types.ObjectId | string | undefined,
    event?: string,
    info?: any
  ) => {
    const { error, success, url } = await updateCloudinaryProfilePhoto({
      _id: session?.user.id,
      event,
      info,
    });

    if (url) {
      update({ picture: url });
    }

    toast({
      title: error ? error : success,
    });
  };

  const onSubmit = (values: z.infer<typeof SettingsProfileSchema>) => {
    startTransition(async () => {
      try {
      } catch (error) {
        console.error(error);
        toast({
          title: "Updating was failed",
          color: "red",
        });
      }
    });
  };

  return (
    <div className="flex gap-x-10 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          {/* username section */}
          <section className="my-5">
            <SettingsHeader variant="md">
              Update your personal data
            </SettingsHeader>
            <SettingsHeader variant="sm" className="text-muted-foreground pb-5">
              This is you personal data. After update other users will see your
              updated information.
            </SettingsHeader>

            {/* field for username */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{"User's Name"}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="username" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>

          <SettingsSeparator />

          {/* Avatar section */}
          <section className="my-5">
            <SettingsHeader variant="md">
              Update your avatar image
            </SettingsHeader>
            <SettingsHeader variant="sm" className="text-muted-foreground pb-5">
              Here you can modify your profile image. After update users will
              see your new avatar image.
            </SettingsHeader>

            {/* file input */}
            <CldUploadButton
              className="flex gap-x-10 items-center"
              options={{ multiple: false }}
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
              onSuccess={(result) => {
                onCloudinarySuccess(_id, result.event, result.info);
              }}
            >
              {/* preview of new logo */}
              <UserAvatar
                className="size-20"
                imageAlt="Your Profile Image"
                imageUri={image ?? ""}
              />
              <span>Upload new avatar</span>
            </CldUploadButton>
          </section>

          <Button type="submit" disabled={isPending} className="w-full">
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
};
