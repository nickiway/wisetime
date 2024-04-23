import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main
      className="h-full bg-no-repeat bg-cover relative"
      style={{
        backgroundPosition: "center",
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg)",
      }}
    >
      {/* header section */}
      <section id="headerSection" className="flex items-center p-5 bg-white">
        <div>
          <span className="text-2xl uppercase font-thin">WiseTime</span>
        </div>

        <div className="flex w-full justify-end">
          <Button variant="link" asChild>
            <Link href="/auth/login" className="text-xl">
              Sign In
            </Link>
          </Button>
        </div>
      </section>

      {/* main section */}
      <section className="px-5 absolute top-1/3">
        <div className="">
          <h2 className="">
            <span className="text-6xl text-white font-bold drop-shadow-lg">
              Start your time tracking for free!
            </span>
          </h2>
          <h2 className="">
            <span className="text-2xl text-white drop-shadow-lg">
              Be ready!
            </span>
          </h2>
          <h2 className="">
            <span className="text-2xl text-white drop-shadow-lg">
              Implement it in your casual life, make it easy!
            </span>
          </h2>
          <div className="my-10">
            <Button variant="default" asChild>
              <Link href="/auth/login" className="text-xl">
                Sign In
              </Link>
            </Button>
          </div>
        </div>

        <div></div>
      </section>
    </main>
  );
}
