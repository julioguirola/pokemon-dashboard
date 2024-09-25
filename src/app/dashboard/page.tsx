import ButtonHome from "@/components/ButtonHome";
import type { Metadata } from "next";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { headers } from "next/headers";
import PokeCard from "@/components/PokeCard";

type Result = {
  name: string;
  url: string;
};

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Dashboard to display image, name, type and attributes of each pokemon",
  openGraph: {
    title: "Pokemon Dashboard",
    description:
      "Dashboard to display image, name, type and attributes of each pokemon",
    images: [{ url: "/pikachu.png" }],
  },
  robots: "index, follow",
};

export default async function () {
  const headerList = headers();
  const queryPage = headerList.get("x-current-page");
  //preventing page under 1
  const page: number = queryPage === null ? 1 : Number(queryPage);
  const offset = (page - 1) * 20;
  const actualEndpoint = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;

  const res = await fetch(actualEndpoint);
  const data: { results: Result[] } = await res.json();

  return (
    <>
      <header className="flex flex-wrap justify-between items-center gap-5 p-10">
        <h1 className="text-2xl">Dashboard</h1>
        <Pagination className="w-[300px]">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={
                  page - 1 <= 1
                    ? "/dashboard?page=1"
                    : "/dashboard?page=" + (page - 1)
                }
              />
            </PaginationItem>
            <PaginationItem>
              {!(page - 1 < 1) && (
                <PaginationLink href={"/dashboard?page=" + (page - 1)}>
                  {page - 1}
                </PaginationLink>
              )}
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="bg-white text-black" href="#">
                {page}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={"/dashboard?page=" + (page + 1)}>
                {page + 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href={"/dashboard?page=" + (page + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <ButtonHome />
      </header>
      <main className="flex flex-wrap justify-center items-center gap-5">
        {data.results.map((p: { name: string; url: string }, i) => {
          return <PokeCard key={i} name={p.name} url={p.url} />;
        })}
      </main>
    </>
  );
}
