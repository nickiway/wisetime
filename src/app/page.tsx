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
      <main>
        <section style={feedStyle} className="relative">
          <div className="container p-10 lg:flex">
            {/*  feed titles  */}
            <div className="max-w-lg flex flex-col gap-y-10">
              <p className="text-white text-6xl font-semibold text-center lg:text-left">
                Time tracking software to drive every decision
              </p>

              <p className="text-white text-xl text-center lg:text-left">
                Give your team a time tracker they`ll love, make confident
                data-backed decisions and focus on the work that matters most.
              </p>

              <div className="flex lg:block justify-center ">
                <Button asChild variant="secondary">
                  <Link href="/auth/login">Start tracking for free</Link>
                </Button>
              </div>
            </div>

            {/* feed images */}
            <div className="lg:px-20 lg:py-0 py-20">
              <Image
                src={feedScreen1.src}
                alt="Screenshot 1"
                width={400}
                height={300}
              />
              <Image
                className="lg:translate-x-1/2  lg:translate-y-[-100px]"
                src={feedScreen2.src}
                alt="Screenshot 2"
                width={400}
                height={300}
              />
            </div>
          </div>
        </section>

        {/* features */}
        <section className="feed-section">
          <div className="container">
            <h1 className="text-4xl text-center py-10  text-primary">
              Much more easier than you can think <br /> It is so simple to use
              !
            </h1>

            <div className="lg:flex w-full">
              <article className="lg:w-1/2">
                <p>
                  <span className="text-muted-foreground uppercase">
                    Customizable time reporting software
                  </span>
                </p>
                <p className="pb-5">
                  <span className="text-title text-3xl ">
                    Project management
                  </span>
                </p>
                <div>
                  <p className="paragraph">
                    No more guesswork. Understand precisely how your team spends
                    their time.
                  </p>

                  <p className="paragraph">
                    Bid farewell to unreliable weekly timesheets and gain
                    control over your team&#39;s accurate billable and
                    non-billable hours.
                  </p>

                  <p className="paragraph">
                    Forget about guessing. With precise insights, you can
                    allocate resources efficiently and boost productivity.
                  </p>
                </div>

                <Button variant="default" asChild>
                  <Link href="/auth/login">More about time reporting</Link>
                </Button>
              </article>
              <aside className="lg:w-1/2 lg:px-10 relative">
                <Image
                  src={feedScreen2.src}
                  alt="feed screen shot 2"
                  layout="fill"
                  objectFit="contain"
                />
              </aside>
            </div>
          </div>
        </section>

        {/* carousel section */}
        <section className="feed-section">
          {/* Icon */}
          <div className="flex justify-center py-10">
            <Image
              src={iconLoveRomance.src}
              alt={"Icon Love Romance"}
              width={128}
              height={128}
            />
          </div>
          {/* title  */}
          <p className="text-center text-title text-2xl">
            Want to improve your productivity{" "}
            <span className="text-red-400">
              <Link href="auth/login">for free</Link>
            </span>
            ?
          </p>

          {/* sub title  */}
          <p className="text-3xl text-title text-center italic py-5">
            &quot;The best free time tracking app&quot;
          </p>

          <div className="w-full flex justify-center  container">
            {/* quoutes  */}
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-[75%]"
            >
              <CarouselContent className="w-full ">
                {carouselLyrics.map((lyric, index) => (
                  <CarouselItem key={index} className="w-full">
                    <div className="p-1">
                      <Card>
                        <CardContent>
                          <p>
                            <span className="text-6xl">&quot;</span>
                          </p>
                          <p>
                            <span className="text-xl">{lyric}</span>
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* footer seciton */}
        <HomeFooter />
      </main>
    </>
  );
}
