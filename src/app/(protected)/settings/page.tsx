import { auth } from "@/auth";

import { TimerIcon, Settings as SettingsIcon, ContactIcon } from "lucide-react";

import { UserAvatar } from "@/components/shared/user-avatar";
import { SignOutButton } from "@/components/settings/sign-out-button";
import {
  Settings,
  SettingsHeader,
  SettingsMenuElement,
  SettingsMenuGroup,
  SettingsSeparator,
  SettingsTabsElement,
  SettingsTabsGroup,
} from "@/components/settings";
import { ProfileSettingsTab } from "@/components/settings/general-settings/profile-settings-tab";
import { PomodorroSettingsTab } from "@/components/settings/pomodorro-settings/pomodrro-settings-tab";

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div className="container ">
      <Settings className="my-10 ">
        <SettingsMenuGroup>
          {/* general settings */}
          <SettingsMenuElement path="profile">
            <SettingsIcon className="mr-3" />
            <span className="capitalize">Profile settings</span>
          </SettingsMenuElement>

          {/* pomdorro settings */}
          <SettingsMenuElement path="pomodrro">
            <TimerIcon className="mr-3" />
            <span className="capitalize">Pomodorro settings</span>
          </SettingsMenuElement>

          <SettingsSeparator />

          {/* signout button  */}
          <SignOutButton />
        </SettingsMenuGroup>

        <SettingsTabsGroup>
          <SettingsTabsElement pathToMatch="profile">
            <SettingsHeader variant="lg" className="pb-5">
              General Settings
            </SettingsHeader>

            <ProfileSettingsTab />
          </SettingsTabsElement>

          <SettingsTabsElement pathToMatch="pomodrro">
            <SettingsHeader variant="lg" className="pb-5">
              Pomodorro Settings
            </SettingsHeader>

            <PomodorroSettingsTab />
          </SettingsTabsElement>
        </SettingsTabsGroup>
      </Settings>
    </div>
  );
}
