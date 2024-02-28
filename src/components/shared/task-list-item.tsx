interface TaskListItemProps {
  name: string;
  deadline: Date;
  priority: string;
  description?: string;
}

export const TaskListItem = ({
  name,
  description,
  deadline,
  priority,
}: TaskListItemProps) => {
  return (
    <li className="flex p-5">
      <div className="w-2/4">
        <p className="text-xl">{name}</p>
        <p className="text-muted-foreground text-xs">{description}</p>
      </div>

      <div className="w-1/4">{deadline.toLocaleDateString()}</div>
      <div className="w-1/4">{priority}</div>
    </li>
  );
};
