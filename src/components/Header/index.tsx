import Logotype from "./Logotype";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <Logotype
        alt="WiseTime"
        image="/logotype.png"
        width={64}
        height={64}
        className="p-5"
      />
      <Navigation />
    </header>
  );
};

export default Header;
