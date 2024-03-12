"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { addTag } from "@/actions/tag";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { addTagToStore } from "@/redux/slices/tagsSlice";

import { AddTagsSchema } from "@/schemas";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";

import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface AddTaskFormProps {
  userId: string | undefined;
}

export const AddTagsForm = ({ userId }: AddTaskFormProps) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const dispatch = useAppDispatch();

  const onSubmit = async (value: z.infer<typeof AddTagsSchema>) => {
    startTransition(async () => {
      const { success, error, insertedTag } = await addTag(value, userId);

      if (insertedTag) dispatch(addTagToStore(insertedTag));

      setError(error);
      setSuccess(success);
    });
  };

  const form = useForm<z.infer<typeof AddTagsSchema>>({
    resolver: zodResolver(AddTagsSchema),
    defaultValues: {
      title: "",
      color: "#000000",
      textColor: "#ffffff",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="py-5 space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="To create a new Web App"
                    type="text"
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Background color</FormLabel>
                <FormControl>
                  <Input {...field} type="color"></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="textColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Text Color</FormLabel>
                <FormControl>
                  <Input {...field} type="color"></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button
          type="submit"
          disabled={isPending && true}
          className="w-full my-5"
        >
          Create a new task
        </Button>
      </form>
    </Form>
  );
};
