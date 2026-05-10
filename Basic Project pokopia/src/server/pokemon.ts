import { createServerFn } from "@tanstack/react-start";


const POKE_URL="https://pokeapi.co/api/v2/pokemon"
export const getPokeonFn=createServerFn(
    {method:'GET'}
).handler(async()=>{
    const response =await fetch(POKE_URL);
    const data=await response.json();
    console.log(data)
    return data;
})

export const savepokemon=createServerFn({method:'POST'}).inputValidator((name:string)=>name).handler(async({data})=>{
    console.log('Saving to our database.....')
    await new Promise((resolve)=>setTimeout(resolve,1000))
    return {success:true,
        saved:data}
    
})