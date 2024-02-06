import navigationLinks from "@/constants/navigationLinks.json";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        {navigationLinks.map(({ href, label }, index) => (
          <li key={index}>
            <a href={href} className="text-blue-500 hover:underline">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
