import navigationLinks from "@/constants/navigationLinks.json";
import LinkList from "../shared/LinkList";

const Navigation = () => {
  return (
    <nav>
      <LinkList navLinks={navigationLinks} />
    </nav>
  );
};

export default Navigation;
