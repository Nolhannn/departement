"use client"

import { FormEvent, useState } from "react"
import { depNav } from "../api/depNav"
export default function BoutonDep(){
  const [refresh, setRefresh] = useState(false);   
  const [dep, setDep]=useState("")
  const [msg,setMsg]=useState('')
  const [visibility, setVisibility]=useState(false)
  function openWindow(check : boolean){
    setVisibility(x=>x=check)
   setMsg("")
  }
  function setMyMsg(newMsg : string){
      setMsg(newMsg)
  }
  const data ={name:''}
    async function submitting(event: FormEvent<HTMLFormElement>) {
      event.preventDefault()
      try{
      const formData = event.currentTarget.input
      const response = await fetch('https://dev.next.core.yatouze.com/api/yatouze/departments', {
        method: 'POST',
        headers:{
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODE2NDEzNCwiZXhwIjoxNzQ4NTk2MTM0fQ.Ipi0GxLPi-uWBx2QAvZe8HQjou6wNj3rwXscolpv1hA",
        'Content-Type': 'application/json',
        "accept":"*/*"
        },
        body: JSON.stringify({
          name : dep
        }),
      })
      const newMsg = await response.json().catch(()=>{setMyMsg("Erreur")})
      newMsg ? setMyMsg(newMsg.message) : setMyMsg("Erreur")
       } catch (error) {
      
    } finally {
      openWindow(false)
      window.location.href = "/departement";
      setRefresh(!refresh); // This forces a re-render
    }
      // Handle response if necessary
      
     
    }
  //<WindowDep isVisible={visibility?"":"hidden"} leBooleen={visibility}/>
    
  return(
    <>
      <div className="border border-[#BFBFBF80] flex justify-between p-2 md:uppercase font-semibold text-sm bg-gray-50 rounded p-3 border-0 mb-4 font-bold text-smaller md:text-large uppercase font-sans">
        <div className="flex ">
        <p className="content-center text-black w-full font-bold">Département</p>
        <p className="bg-(--currentColor) rounded-full w-8 content-center h-7 text-center font-bold">{depNav}</p>
        </div>
        <div>
        <p className="text-black w-full font-bold">Nombre d'employé</p>
        </div>
        <div>
        <p className="text-black w-full font-bold">Actions</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div></div>
        <button onClick={()=>{openWindow(true)}}><img className="border cursor-pointer hover:scale-110 duration-300 p-2 rounded-full shadow-md shadow-gray-500" src="/plus-svgrepo-com.svg" alt="plus" width="40" height="40"/></button>
      </div>
        <form action="" onSubmit={ submitting}>
          <div className={"text-white right-0 top-1/2 fixed border p-5 flex flex-col items-center bg-gray-500 "+( visibility?"":"hidden")}>
            <p className="text-white" >Nouveau département :</p>
            <input required onChange={(event)=>setDep(event.target.value)} name="name" className="border text-black bg-white p-1" type="text" />
            <div className="flex flex-row gap-5 pt-5">
              <button type="button" onClick={()=>{openWindow(false)}} className="border text-black bg-white p-1">Quitter</button>
              <button type="submit" className="border text-black bg-white p-1">Ajouter</button>
              
            </div>
            {msg!=""&&<p>{msg}</p>}
          </div>
        </form>
       
         </>
  )     
}