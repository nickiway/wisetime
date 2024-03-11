"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormEvent, useState, useTransition } from "react";

import { AddTaskSchema } from "@/schemas";
import { addTask } from "@/actions/add-task";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface AddTaskFormProps {
  userId: string | undefined;
}

export const AddTaskForm = ({ userId }: AddTaskFormProps) => {
  const [isPending, startTransition] = useTransition();
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const onSubmit = async (value: z.infer<typeof AddTaskSchema>) => {
    startTransition(async () => {
      const { error, success } = await addTask(userId, value, tags);

      setError(error);
      setSuccess(success);
    });
  };

  const form = useForm<z.infer<typeof AddTaskSchema>>({
    resolver: zodResolver(AddTaskSchema),
    defaultValues: {
      title: "",
    },
  });

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="py-5 space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task title</FormLabel>
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

            <div>
              <p>Tags</p>

              <div>
                {tags.map((item: string, index: number) => {
                  return <span key={index}>{item}</span>;
                })}
              </div>
              <Popover>
                <PopoverTrigger>Open</PopoverTrigger>
                <PopoverContent>
                  Place content for the popover here.
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" disabled={isPending && true} className="w-full">
            Create a new task
          </Button>
        </form>
      </Form>
    </>
  );
};
