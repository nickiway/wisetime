"use client";

import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema } from "@/schemas";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/buttton";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });

  return (
    <CardWrapper
      headerLabel="Register new account"
      backButtonLabel="Do you have account already?"
      backButtonHref="/auth/login"
      showSocials
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => {})}>
          <div className="py-5 space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Same Jhonson"
                      type="text"
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="same.jhon@gmail.com"
                      type="email"
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="*******"
                      type="password"
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message="Somethin went wrong" />
            <FormSuccess message="The email was sent" />
          </div>

          <Button type="submit" className="w-full">
            Register My Account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
