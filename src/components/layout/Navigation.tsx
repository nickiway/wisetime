import navLinks from "@/constants/navLinks.json";
import LinkList from "../shared/LinkList";

const Navigation = () => {
  return (
    <nav>
      <LinkList navLinks={navLinks} />
    </nav>
  );
};

export default Navigation;
