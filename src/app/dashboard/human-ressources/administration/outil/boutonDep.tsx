"use client"

import { FormEvent, useState } from "react"
export default function BoutonDep(){
 
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
   
      const formData = event.currentTarget.input
      console.log(formData)
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
      // Handle response if necessary
      const newMsg = await response.json().catch(()=>{setMyMsg("Erreur")})
      newMsg ? setMyMsg(newMsg.message) : setMyMsg("Erreur")
     
    }
  //<WindowDep isVisible={visibility?"":"hidden"} leBooleen={visibility}/>
    
  return(
    <>
        <p className="text-black p-5 w-full font-bold">Département</p>
        <p className="text-black p-5 w-full font-bold">Nombre d'employé</p>
        <button onClick={()=>{openWindow(true)}}><img src="/plus-svgrepo-com.svg" alt="plus" width="20" height="20"/></button>
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