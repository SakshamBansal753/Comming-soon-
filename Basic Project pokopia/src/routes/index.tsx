import SkillCard from '#/components/SkillCard'
import { getPokeonFn } from '#/server/pokemon'
import { createFileRoute } from '@tanstack/react-router'
const POKE_URL="https://pokeapi.co/api/v2/pokemon"
function PokemonLoader() {
  return (
    <main className='page-wrap px-4 pb-8 pt-14 island-shell'>
      <h1 className='display-title flex justify-center items-center-safe text-4xl mb-8'>
        Loading Pokédex ⚡
      </h1>

      <ul className='mt-6 list-none p-0 space-y-5'>
        {Array.from({ length: 6 }).map((_, index) => (
          <li
            key={index}
            className='animate-pulse rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm'
          >
            <div className='flex items-center gap-4'>
              <div className='h-14 w-14 rounded-full bg-zinc-200' />

              <div className='flex-1'>
                <div className='h-4 w-40 rounded bg-zinc-200 mb-3' />
                <div className='h-3 w-24 rounded bg-zinc-100' />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
export const Route = createFileRoute('/')({ 
  component: Home,
  pendingComponent:PokemonLoader,
  errorComponent:()=>(
    <div className='island-shell'>Error loading url</div>
  ),
  loader: async () => {
    // await new Promise((resolve) => setTimeout(resolve, 2000))

    //   const response = await fetch(POKE_URL)
    //   return response.json()
    const data =await getPokeonFn();
    return data;
  }
 })

function Home() {
  const data=Route.useLoaderData()
  return (
    <main className='page-wrap px-4 pb-8 pt-14 island-shell '>
      <h1 className='display-title flex justify-center items-center-safe text-4xl'> Hello from Saksham 😎</h1>
    
      <ul className='mt-6 list-none p-0 space-y-5'>
      {data.results.map((pokemon:{name:string})=>{
        return(
        <li key={pokemon.name}>
          <SkillCard name={pokemon.name}/>
        </li>
      )})}

      </ul>
      </main>
  )
}
