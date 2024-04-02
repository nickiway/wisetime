"use client";
import { CldImage } from "next-cloudinary";

export const SettingsMenuGroup = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <section className="flex flex-col gap-5">{children}</section>;
};
