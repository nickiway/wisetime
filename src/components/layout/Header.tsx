import Logotype from "../shared/Logotype";
import Navigation from "./Navigation";
import ThemeSwitcher from "../ui/ThemeSwitch";

const Header = () => {
  return (
    <header>
      {/* logotype */}
      <Logotype
        alt="WiseTime"
        image="/logotype.png"
        width={64}
        height={64}
        className="p-5"
      />{" "}
      {/* navigation */}
      <Navigation />
      {/* theme switcher */}
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
