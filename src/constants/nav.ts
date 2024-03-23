import { IoMdSettings } from "react-icons/io";
import { SiTask, SiGoogleanalytics } from "react-icons/si";
import { FaQuestion, FaTags, FaFolder, FaClock } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { GiTomato } from "react-icons/gi";

export const MENU_LIST = [
  { id: 9, label: "Classic Timer", href: "/classic", icon: FaClock },
  { id: 8, label: "Pomodorro Timer", href: "/pomodorro", icon: GiTomato },
  { id: 2, label: "Analytics", href: "/analytics", icon: SiGoogleanalytics },
  { id: 3, label: "My tasks", href: "/tasks", icon: SiTask },
  { id: 5, label: "My tags", href: "/tags", icon: FaTags },
  { id: 6, label: "Contacts", href: "/settings", icon: BsPeopleFill },
];

export const EXTRA_MENU = [
  { id: 1, label: "Settings", href: "/settings", icon: IoMdSettings },
  { id: 4, label: "Need help?", href: "/productivity", icon: FaQuestion },
];
