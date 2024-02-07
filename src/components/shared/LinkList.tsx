import LinkListItem from "./LinkListItem";

interface LinkListProps {
  navLinks: { href: string; label: string }[];
}

const LinkList = ({ navLinks }: LinkListProps) => {
  return (
    <ul className="flex gap-4">
      {navLinks.map(({ href, label }, index) => (
        <LinkListItem key={index} href={href} label={label} />
      ))}
    </ul>
  );
};

export default LinkList;
