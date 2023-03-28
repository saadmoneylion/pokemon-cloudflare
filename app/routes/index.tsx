import type { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { Link, useLoaderData, } from "@remix-run/react";
import { getPokemons } from "~/models/pokemon.server";
import translation from "../translations/en";

type LoaderData = {
  data: Awaited<ReturnType<typeof getPokemons>>;
  clientSecret: string;
};


export async function loader({ context }: LoaderArgs) {
  console.log(`contextdata: ${JSON.stringify(context)}`);
  console.log(`contextdata: ${JSON.stringify(context.CLIENT_SECRET)}`);

  return json({
    data: context.CLIENT_SECRET as string
  });
  // json<LoaderData>({
  //   data: await getPokemons(),
  //   clientSecret: context.CLIENT_SECRET as string,
  // });
};

export default function Index() {
  const { data } = useLoaderData() // as LoaderData;
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        Which Pokémon do you want to catch?
      </h1>
      <h3>Client Scret: {data}</h3>
      <div className="flex w-2/4 h-10 rounded-full justify-center text-xl m-auto bg-teal-500 cursor-pointer">
        <Link
          className="flex justify-center text-base mt-2 text-black cursor-pointer"
          to={"/signup"}>
          {translation.login.cta_sign_up_now}
        </Link>
      </div>
      {/* <ul className='mx-auto text-center'>
        {data.map((pokemon: any) => (
          <li key={pokemon.name}>
            <Link
              to={pokemon.name}
              className="text-blue-600 underline"
            >
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul> */}
    </main>
  );
}