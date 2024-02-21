"use client";

import * as z from "zod";

import { HTMLAttributes } from "react";

import { SearchSchema } from "@/schemas";

import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Form, FormItem, FormField, FormControl } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

interface SearchFormProps extends HTMLAttributes<HTMLFormElement> {}

export const SearchForm = ({ className }: SearchFormProps) => {
  const form = useForm<z.infer<typeof SearchSchema>>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = (values: z.infer<typeof SearchSchema>) => {
    console.log(values.search);
  };

  return (
    <Form {...form}>
      <form onChange={form.handleSubmit(onSubmit)} className={className}>
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Search for the task"
                  type="search"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
