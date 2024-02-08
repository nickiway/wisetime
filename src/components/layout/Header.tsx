import Logotype from "../shared/Logotype";
import Navigation from "./Navigation";
import ThemeSwitcher from "../ui/ThemeSwitch";

const Header = () => {
  return (
    <header>
      {/* logotype */}
      <Logotype
        alt="WiseTime"
        image="/logo-3.svg"
        width={96}
        height={96}
      />{" "}
      {/* navigation */}
      <Navigation />
      {/* theme switcher */}
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
