import Image from "next/image";

export default async function ({ name, url }: { name: string; url: string }) {
  const res = await fetch(url);
  const data = await res.json();

  return (
    <div className="min-w-[250px] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer p-3 border border-solid border-black rounded-lg dark:border-white">
      <div className="flex gap-5 items-center justify-center">
        <strong>{name}</strong>
        <Image
          src={data.sprites.front_default}
          alt={"Image of " + name}
          width={96}
          height={96}
        />
      </div>
      <div className="flex gap-5 justify-center rounded-lg">
        <div className="border border-solid border-black dark:border-white p-3 rounded-lg">
          <p>Types:</p>

          {data.types.map((a: { type: { name: string } }, i: number) => (
            <p key={i}>{a.type.name}</p>
          ))}
        </div>
        <div className="border border-solid border-black dark:border-white p-3 rounded-lg">
          <p>Abilitys:</p>
          {data.abilities.map((t: { ability: { name: string } }, i: number) => (
            <p key={i}>{t.ability.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
