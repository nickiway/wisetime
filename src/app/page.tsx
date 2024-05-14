import { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { StatisticCard } from "@/components/shared/statistic-card";

// assets
import feedImage from "@/assets/images/feed.jpg";
import feedScreen1 from "@/assets/images/feed-screen-1.png";
import feedScreen2 from "@/assets/images/feed-screen-2.png";

import iconLoveRomance from "@/assets/icons/icon-love-and-romance.png";

// constants
import { carouselLyrics } from "@/constants/feed-carousel-lyrics";
// header component
const HomeHeader = () => {
  return (
    <>
      <section className="bg-primary p-1 flex flex-row-reverse">
        <Button asChild variant="link" className="text-primary-foreground ">
          <Link href="missions">Our missions</Link>
        </Button>
      </section>

      <header className="flex items-center p-5 sticky z-10 w-full top-0 bg-white">
        <p className="w-full">
          <span className="uppercase font-bold tracking-widest">Wisetime</span>
        </p>

        <Button asChild variant="link">
          <Link href="/auth/login">Log In</Link>
        </Button>

        <span>|</span>

        <Button asChild variant="link">
          <Link href="/auth/register">Register</Link>
        </Button>
      </header>
    </>
  );
};

// footer component
const HomeFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground p-10">
      <div className="container mx-auto">
        <p className="text-center">
          <span>&copy; 2024 WiseTime. All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};

// feed styles
const feedStyle = {
  backgroundImage: `url(${feedImage.src})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
} as CSSProperties;

// main component
export default function Home() {
  return (
    <>
      <HomeHeader />
    </>
  );
}
