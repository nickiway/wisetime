import { FC } from "react";
import Image from "next/image";

interface LogotypeProps {
  alt: string;
  image: string;
  width: number;
  height: number;
  className?: string;
}

const Logotype: FC<LogotypeProps> = ({
  alt,
  image,
  className,
  width,
  height,
}) => {
  return (
    <figure className={className}>
      <Image src={image} alt={alt} width={width} height={height} />
    </figure>
  );
};

export default Logotype;
