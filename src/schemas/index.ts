import { IProfileSettings } from "@/types/settings";
import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is reqired",
  }),
  password: z.string().min(1, "Enter the password"),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, "Username length must be more than 6 symbols"),
  email: z.string().email({
    message: "Email is reqired",
  }),
  password: z.string().min(6, "Password length must be more than 6 symbols"),
});

export const SearchSchema = z.object({
  search: z.string(),
});

export const AddProjectSchema = z.object({
  title: z.string().min(1, "Enter the project name"),
});

export const AddTagsSchema = z.object({
  title: z.string().min(1, "The title is required"),
  color: z.string(),
  textColor: z.string(),
});

export const SettingsProfileSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name length must be greater than 1 character"),

  lastName: z
    .string()
    .min(1, "Last name length must be greater than 1 character"),
});

export const PomodorroSettingsSchema = z
  .object({
    count: z.coerce
      .number({
        required_error: "Enter the number of cycles",
        invalid_type_error: "The cycles number must be entered",
      })
      .refine((value) => value >= 4 && value <= 8, {
        message: "The number of cycles must be from 4 to 8",
      }),

    restShortInterval: z.coerce
      .number({
        required_error: "Enter the interval of short rest",
        invalid_type_error: "The interval must be provided as number",
      })
      .min(5, "The short rest interval must be minimum 5"),
    restLongInterval: z.coerce
      .number({
        required_error: "Enter the interval of long rest",
        invalid_type_error: "The interval must be provided as number",
      })
      .min(15, "The long rest interval must be minimum 15"),

    workShortInterval: z.coerce
      .number({
        required_error: "Enter the short work interval",
        invalid_type_error: "The interval must be provided as number",
      })
      .min(20, "The short rest interval must be minimum 20"),
    workLongInterval: z.coerce
      .number({
        required_error: "Enter the long work interval",
        invalid_type_error: "The interval must be provided as number",
      })
      .min(30, "The long rest interval must be minimum 30"),
  })
  .refine((data) => data.restShortInterval < data.restLongInterval, {
    message: "The short rest interval must be less than the long rest interval",
    path: ["restShortInterval"],
  })
  .refine((data) => data.workShortInterval < data.workLongInterval, {
    message: "The short work interval must be less than the long work interval",
    path: ["workShortInterval"],
  })
  .transform((data) => {
    return data;
  });
