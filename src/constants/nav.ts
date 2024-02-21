import { IoMdSettings } from "react-icons/io";
import { SiTask, SiGoogleanalytics } from "react-icons/si";
import { FaQuestion, FaTags, FaFolder } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

export const MENU_LIST = [
  { id: 2, label: "Analytics", href: "/productivity", icon: SiGoogleanalytics },
  { id: 3, label: "My tasks", href: "/productivity", icon: SiTask },
  { id: 5, label: "My tags", href: "/settings", icon: FaTags },
  { id: 6, label: "Contacts", href: "/settings", icon: BsPeopleFill },
  { id: 8, label: "My projects", href: "/settings", icon: FaFolder },
];

export const EXTRA_MENU = [
  { id: 1, label: "Settings", href: "/settings", icon: IoMdSettings },
  { id: 4, label: "Need help?", href: "/productivity", icon: FaQuestion },
];
