"use client";

import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { HTMLAttributes, useDeferredValue, useState } from "react";
import { useForm } from "react-hook-form";

import { SearchSchema } from "@/schemas";

import { Input } from "@/components/ui/input";
import { Form, FormItem, FormField, FormControl } from "@/components/ui/form";
import { SearchFormOutput } from "@/components/shared/search-form-output";

interface SearchFormProps extends HTMLAttributes<HTMLFormElement> {}

// test data for search form
const data = [
  "search 1",
  "search 2",
  "search 3",
  "search 4",
  "search 5",
  "search 6",
  "search 7",
];

export const SearchForm = ({ className }: SearchFormProps) => {
  const [query, setQuery] = useState<string | undefined>();
  const [filteredData, setFilteredData] = useState<string[] | undefined>();
  const defferedQuery = useDeferredValue(query);

  const form = useForm<z.infer<typeof SearchSchema>>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      search: "",
    },
  });

  const onChange = (values: z.infer<typeof SearchSchema>) => {
    setQuery(values.search);

    const filtered = data.filter((item) => {
      if (defferedQuery === "") return undefined;
      if (defferedQuery) {
        return item.includes(defferedQuery);
      }
    });

    setFilteredData(filtered);
  };

  return (
    <Form {...form}>
      <form onChange={form.handleSubmit(onChange)} className={className}>
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
        <SearchFormOutput
          className="bg-white rounded-md shadow-lg mt-2 z-50"
          data={filteredData}
        />
      </form>
    </Form>
  );
};
