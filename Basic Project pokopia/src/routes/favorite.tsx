import { savepokemon } from '#/server/pokemon'
import { createFileRoute } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start'
import React, { useState } from 'react'

export const Route = createFileRoute('/favorite')({
  component: FavoritePage,
})

function FavoritePage() {
  const [name, setname] = useState('')
  const [status, setstatus] = useState('')
  const handleSubmit=async (e:React.FormEvent)=>{
    e.preventDefault();
    setstatus("Saving....");
    await savePokemon({data:name});
    setstatus(`Succesfully saved the name of ${name}`)
    setname('')

  }
  const savePokemon=useServerFn(savepokemon);
  return <main className='page-wrap,px-4 pb-8 pt-14'>
    <h1>Save Pokemon</h1>
    <form onSubmit={handleSubmit} className='mt-6 space-x-4'>
      <input 
      type="text"
      value={name}
      onChange={(e)=>setname(e.target.value)}
      className='border p-2 rounded'
      placeholder='Pikachu'/>
      <button type='submit' className='bg-blue-500 text-white p-2 rounded '>Save</button>
    </form>
    <p className='mt-4'>{status}</p>
  </main>
}
