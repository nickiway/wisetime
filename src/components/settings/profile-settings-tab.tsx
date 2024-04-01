"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Session } from "next-auth";
import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";

import { SettingsProfileSchema } from "@/schemas";

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

export const ProfileSettingsTab = ({
  session,
}: {
  session: Session | null;
}) => {
  const image = session?.user.image;
  const _id = session?.user.id;

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof SettingsProfileSchema>>({
    resolver: zodResolver(SettingsProfileSchema),
    defaultValues: {
      username: "",
      file: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof SettingsProfileSchema>) => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/settings/general", {
          method: "PATCH",
          body: JSON.stringify(values),
        });

        console.log(response);
      } catch (error) {
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
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem className="flex gap-x-10 items-end">
                  {/* preview of new logo */}
                  <UserAvatar
                    className="size-20"
                    imageAlt="Your Profile Image"
                    imageUri={
                      selectedImage
                        ? URL.createObjectURL(selectedImage)
                        : image ?? ""
                    }
                  />

                  <FormControl>
                    <Input
                      type="file"
                      onBlur={field.onBlur}
                      name={field.name}
                      onChange={(e) => {
                        field.onChange(e.target.files);
                        setSelectedImage(e.target.files?.[0] || null);
                      }}
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>

          <Button type="submit" disabled={isPending} className="w-full">
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
};
