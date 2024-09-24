import { isAuthenticated } from "@/lib/session";
import ButtonLog from "@/components/ButtonLog";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const authed = await isAuthenticated();
  return (
    <>
      <header className="flex justify-between align-center items-center h-1/5 p-10">
        <h1 className="text-2xl">Wellcome to Pokemon Dashboard</h1>
        <ButtonLog caso={authed ? "logout" : "login"} />
      </header>
      <main className="flex flex-wrap h-4/5 justify-center items-center">
        <section className="w-1/2 min-w-[300px] flex flex-col p-10 gap-5">
          <p>
            Explore and analyze a Pokémon collection with our powerful
            dashboard. Get insights, stats, and manage your Pokémon journey like
            never before!
          </p>
          <Button className="bg-green-500 hover:bg-green-600 w-60" asChild>
            <Link href={"/dashboard"}>Get Started</Link>
          </Button>
        </section>
        <section className="w-1/2 min-w-[300px] flex p-10 gap-5 justify-center">
          <Carousel className="w-[300px]">
            <CarouselContent>
              <CarouselItem className="flex justify-center">
                <Image src="/pikachu.png" alt="" width={250} height={250} />
              </CarouselItem>
              <CarouselItem className="flex justify-center">
                <Image src="/charmander.png" alt="" width={250} height={250} />
              </CarouselItem>
              <CarouselItem className="flex justify-center">
                <Image src="/squirtle.png" alt="" width={250} height={250} />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </main>
    </>
  );
}
