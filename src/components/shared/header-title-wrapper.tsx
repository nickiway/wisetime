export const HeaderTitleWrapper = ({
  children,
  title,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="p-5">
      <section className="flex">
        <p className="font-bold text-2xl">{title}</p>
        <div className="flex justify-end w-full">{children}</div>
      </section>
    </div>
  );
};
