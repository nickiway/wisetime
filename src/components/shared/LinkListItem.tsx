import Link from "next/link";

interface LinkListItemProps {
  href: string;
  label: string;
}

const LinkListItem = ({ href, label }: LinkListItemProps) => {
  return (
    <li>
      <Link href={href} className="text-blue-500 hover:underline">
        {label}
      </Link>
    </li>
  );
};

export default LinkListItem;
