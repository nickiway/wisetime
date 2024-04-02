"use client";

import { CldUploadButton } from "next-cloudinary";
import type { Types } from "mongoose";

import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

import { updateCloudinaryProfilePhoto } from "@/actions/settings";

import { SettingsHeader } from "..";
import { UserAvatar } from "../../shared/user-avatar";

export const UploadAvatarPicker = () => {
  const { toast } = useToast();

  const { data: session, update } = useSession({
    required: true,
  });

  const onCloudinarySuccess = async (
    _id: Types.ObjectId | string | undefined,
    event?: string,
    info?: any
  ) => {
    const { error, success, url } = await updateCloudinaryProfilePhoto({
      _id: session?.user.id,
      event,
      info,
    });

    if (url) {
      update({ picture: url });
    }

    toast({
      title: error ? error : success,
    });
  };

  const image = session?.user.image;
  const _id = session?.user.id;

  return (
    <section className="my-5">
      <SettingsHeader variant="md">Update your avatar image</SettingsHeader>
      <SettingsHeader variant="sm" className="text-muted-foreground pb-5">
        Here you can modify your profile image. After update users will see your
        new avatar image.
      </SettingsHeader>

      {/* file input */}
      <CldUploadButton
        className="flex gap-x-10 items-center"
        options={{ multiple: false }}
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
        onSuccess={(result) => {
          onCloudinarySuccess(_id, result.event, result.info);
        }}
      >
        {/* preview of new logo */}
        <UserAvatar
          className="size-20"
          imageAlt="Your Profile Image"
          imageUri={image ?? ""}
        />
        <span>Upload new avatar</span>
      </CldUploadButton>
    </section>
  );
};
