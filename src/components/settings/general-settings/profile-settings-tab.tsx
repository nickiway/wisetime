"use client";

import { UploadAvatarPicker } from "./upload-avatar-picker";
import { GeneralSettingsForm } from "./general-settings-form";

export const ProfileSettingsTab = () => {
  return (
    <div className="flex gap-x-10 ">
      <section className="w-full">
        <GeneralSettingsForm />
      </section>
      <section>
        <UploadAvatarPicker />
      </section>
    </div>
  );
};
