"use client"
import { FormEvent, useEffect, useState } from "react"
import { depNav } from "../api/depNav"
import { useRouter } from "next/navigation"
export default function DeletePro(
  listePro:{
    proID : number
    proName : string 
  }
){
  const [refresh, setRefresh] = useState(false);   
  const [visibility, setVisibility]=useState(false)
  function openWindow(check : boolean){
    setVisibility(x=>x=check)
  }
  async function submitting(event: FormEvent<HTMLFormElement>) {
      event.preventDefault()
    try {
      const formData = event.currentTarget.input
      console.log(formData)
      const response = await fetch('https://dev.next.core.yatouze.com/api/yatouze/profiles/'+listePro.proID, {
        method: 'DELETE',
        headers:{
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODE2NDEzNCwiZXhwIjoxNzQ4NTk2MTM0fQ.Ipi0GxLPi-uWBx2QAvZe8HQjou6wNj3rwXscolpv1hA",
        'Content-Type': 'application/json',
        "accept":"*/*"
        }
      })
    } catch (error) {
      if(error instanceof Error){
          console.log(error)
        }
    } finally {
      window.location.href = "/profil";
      setRefresh(!refresh); // This forces a re-render
    }
    }
  return(
    <>
      <button onClick={()=>{openWindow(true)}} type="button" className="text-danger text-smaller flex sm:text-2xl hover:scale-110 duration-300">
          <img src="/delete.svg" className="cursor-pointer text-larger" width="18" height="18" data-pc-section="image" alt=""/>
      </button>
        <form action="./" onSubmit={submitting}>
          <div className={"text-white right-0 top-1/2 fixed border p-5 flex flex-col items-center bg-gray-500 "+( visibility?"":"hidden")}>
            <p className="text-white" >Voulez vous vraiment supprimer {listePro.proName} ? </p>
           
            <div className="flex flex-row gap-5 pt-5">
              <button type="button" onClick={()=>{openWindow(false)}} className="border text-black bg-white p-1">Non</button>
              <button type="submit" onClick={()=>{openWindow(false)}} className="border text-black bg-white p-1">Oui</button>  
            </div>
          </div>
        </form>
       
         </>
  )     
}