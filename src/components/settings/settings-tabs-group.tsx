import { useContext, createContext } from "react";

// tab name
type TabType = "general" | "pomodrro";

// tab names context
const TabContext = createContext<TabType>("general");

export const SettingsTabsGroup = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section>
      <div>Menu Label</div>
      <div>{children}</div>
    </section>
  );
};
