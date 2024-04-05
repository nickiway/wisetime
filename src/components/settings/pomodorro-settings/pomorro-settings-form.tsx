"use client";
import * as z from "zod";

import { useSettings } from "@/hooks/useSettings";
import { useForm } from "react-hook-form";

import { PomodorroSettingsSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useAppDispatch } from "@/redux/hooks";
import { useSession } from "next-auth/react";
import { useTransition } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SettingsHeader, SettingsSeparator } from "..";
import { updatePomodorroTimeSettings } from "@/actions/settings";
import { updatePomodorroSliceSettings } from "@/redux/slices/settingsSlice";

export const PomodorroSettingsForm = () => {
  const { loading, pomodorro } = useSettings();
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const [isPending, startTransition] = useTransition();
  const { data: session } = useSession();

  const onSubmit = (values: z.infer<typeof PomodorroSettingsSchema>) => {
    startTransition(async () => {
      if (!form.formState.isDirty) return;

      if (!session?.user.id) return;

      const { error, success, objToUpdate } = await updatePomodorroTimeSettings(
        session?.user.id,
        values
      );

      if (objToUpdate) {
        dispatch(updatePomodorroSliceSettings(objToUpdate));
      }

      toast({
        title: success ? success : error,
      });
    });
  };

  const form = useForm<z.infer<typeof PomodorroSettingsSchema>>({
    resolver: zodResolver(PomodorroSettingsSchema),
    defaultValues: {
      count: 0,
      restLongInterval: 0,
      restShortInterval: 0,
      workLongInterval: 0,
      workShortInterval: 0,
    },
  });

  //  on data load from db
  useEffect(() => {
    if (loading === "succeeded") {
      form.reset({
        count: pomodorro.restConfig.count,
        restLongInterval: pomodorro.restConfig.duration.long,
        restShortInterval: pomodorro.restConfig.duration.short,
        workLongInterval: pomodorro.workConfig.duration.long,
        workShortInterval: pomodorro.workConfig.duration.short,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, form.reset, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <section className="pt-5">
          <SettingsHeader variant="md">Cycles Configuration</SettingsHeader>
          <SettingsHeader variant="sm" className="text-muted-foreground">
            Set up the number of cycles to be passed during one complete
            pomodorro session
          </SettingsHeader>

          <FormField
            control={form.control}
            name="count"
            render={({ field }) => (
              <FormItem className="my-5">
                <FormLabel>Enter the count of cycles</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter number of cycles (4 - 8)"
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>
        <SettingsSeparator />

        <section className="pt-5">
          <SettingsHeader variant="md">Rest Configuration</SettingsHeader>

          <SettingsHeader variant="sm" className="text-muted-foreground ">
            Set up the configuration of your rest intervals during pomodorro
            timer
          </SettingsHeader>

          <FormField
            control={form.control}
            name="restLongInterval"
            render={({ field }) => (
              <FormItem className="my-5">
                <FormLabel>Enter the long rest interval time</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter time in minutes"
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="restShortInterval"
            render={({ field }) => (
              <FormItem className="my-5">
                <FormLabel>Enter the short rest interval time</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter time in minutes"
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        <section className="pt-5">
          <SettingsHeader variant="md">Work Configuration</SettingsHeader>

          <SettingsHeader variant="sm" className="text-muted-foreground ">
            Set up the configuration of your work intervals during pomodorro
            timer
          </SettingsHeader>

          <FormField
            control={form.control}
            name="workLongInterval"
            render={({ field }) => (
              <FormItem className="my-5">
                <FormLabel>Enter the long work interval time</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter time in minutes"
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="workShortInterval"
            render={({ field }) => (
              <FormItem className="my-5">
                <FormLabel>Enter the short work interval time</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter time in minutes"
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>
        <Button
          type="submit"
          disabled={isPending || !form.formState.isDirty}
          className="w-full"
        >
          Save changes
        </Button>
      </form>
    </Form>
  );
};
