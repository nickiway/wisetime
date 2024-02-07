interface PageProps {
  params: { slug: string };
}

const Page = ({ params }: PageProps) => {
  const { slug } = params;
  return <div>FAQ: {slug}</div>;
};

export default Page;
