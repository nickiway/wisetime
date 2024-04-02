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

          {/* Contact */}
          <SettingsMenuElement path="contacts">
            <ContactIcon className="mr-3" />
            <span className="contact">Contacts settings</span>
          </SettingsMenuElement>

          <SettingsSeparator />

          {/* signout button  */}
          <SignOutButton />
        </SettingsMenuGroup>

        <SettingsTabsGroup>
          <SettingsHeader variant="lg" className="pb-5">
            Settings
          </SettingsHeader>

          <SettingsTabsElement pathToMatch="profile">
            <ProfileSettingsTab session={session} />
          </SettingsTabsElement>

          <SettingsTabsElement pathToMatch="pomodrro">
            <div>Pomodorro</div>
          </SettingsTabsElement>

          <SettingsTabsElement pathToMatch="contacts">
            <div>Contacts</div>
          </SettingsTabsElement>
        </SettingsTabsGroup>
      </Settings>
    </div>
  );
}
