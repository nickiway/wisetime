import Image from "next/image";

interface LogoProps {
  src: string;
  alt: string;
}
export const Logo = ({ src, alt }: LogoProps) => {
  return <Image src={src} width={64} height={64} alt={alt} />;
};
