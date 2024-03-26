"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { AddProjectSchema } from "@/schemas";
import { toggleTimerTag } from "@/redux/slices/projectFormSlice";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useTags } from "@/hooks/useTags";
import { TagsPicker } from "../shared/tags-picker";
import { useCallback } from "react";
import { add } from "@/actions/project";
import { useToast } from "../ui/use-toast";

interface AddProjectProps {
  userId: string | undefined;
}

export const AddTaskForm = ({ userId }: AddProjectProps) => {
  const dispatch = useAppDispatch();
  const [isPending, setIsPending] = useState(false);
  const { toast } = useToast();

  const tags = useTags(userId ?? "");
  const selectedTags = useAppSelector((state) => state.projectFormSlice.tags);

  const onTagsClick = useCallback(
    (_id: string) => {
      dispatch(toggleTimerTag(_id));
    },
    [dispatch]
  );

  const form = useForm<z.infer<typeof AddProjectSchema>>({
    resolver: zodResolver(AddProjectSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof AddProjectSchema>) => {
    setIsPending(true);
    if (userId === undefined) throw new Error("Relogin to your account");
    const response = await add(userId, value, selectedTags);
    setIsPending(false);

    if (response) {
      toast({
        title: "The project created successfully",
      });
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>+ Add New Project</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new project</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="py-5 space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Title</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="University"
                          type="text"
                        ></Input>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* tags */}
                <TagsPicker
                  label="Select Tags"
                  selectedTags={selectedTags}
                  tags={tags}
                  onClickCb={onTagsClick}
                />
              </div>
              <Button type="submit" disabled={isPending} className="w-full">
                Create New Project
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};