"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { updateFirstName } from "@/redux/slices/settingsSlice";

import { useToast } from "../../ui/use-toast";
import { useSettings } from "@/hooks/useSettings";
import { useAppDispatch } from "@/redux/hooks";
import { useTransition, useEffect } from "react";
import { useForm } from "react-hook-form";

import { SettingsProfileSchema } from "@/schemas";
import { updateSettingsProfile } from "@/actions/settings";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { SettingsHeader, SettingsSeparator } from "..";
import { useSession } from "next-auth/react";

export const GeneralSettingsForm = () => {
  const { toast } = useToast();
  const dispatch = useAppDispatch();

  const { profile, loading } = useSettings();
  const [isPending, startTransition] = useTransition();
  const { data: session } = useSession();

  const form = useForm<z.infer<typeof SettingsProfileSchema>>({
    resolver: zodResolver(SettingsProfileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  //  on data load from db
  useEffect(() => {
    if (loading === "succeeded") {
      form.reset({
        firstName: profile.firstName,
        lastName: profile.lastName,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, form.reset, form]);

  const onSubmit = (values: z.infer<typeof SettingsProfileSchema>) => {
    startTransition(async () => {
      if (!form.formState.isDirty) return;

      if (!session?.user.id) return;

      const { error, success } = await updateSettingsProfile(
        session?.user.id,
        values
      );

      toast({
        title: success ? success : error,
      });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <section className="my-5">
          <SettingsHeader variant="md">
            Update your personal data
          </SettingsHeader>

          <SettingsHeader variant="sm" className="text-muted-foreground pb-5">
            This is you personal data. After update other users will see your
            updated information.
          </SettingsHeader>

          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="my-5">
                <FormLabel>{"Enter Your First Name"}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="First Name"
                    type="text"
                    onChange={(e) => {
                      field.onChange();
                      dispatch(updateFirstName(e.target.value));
                      form.setValue("firstName", e.target.value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="my-5">
                <FormLabel>{"Enter Your Last Name"}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Last Name"
                    type="text"
                    onChange={(e) => {
                      field.onChange();
                      dispatch(updateFirstName(e.target.value));
                      form.setValue("lastName", e.target.value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        <SettingsSeparator />

        <Button
          type="submit"
          disabled={isPending || !form.formState.isDirty}
          className="w-full"
        >
          Save
        </Button>
      </form>
    </Form>
  );
};
