"use client"

import { FormEvent, useState } from "react" 
import { proNav } from "../api/proNav"
export default function BoutonPro(
  liste : {
    liste : any
    nu:number
  }
){
 let nu=proNav
  const [dep, setDep]=useState("Autre")
  const [profil, setProfil]=useState("")
  const [idDep, setidDep]=useState("45")
  const [msg,setMsg]=useState('')
  const [visibility, setVisibility]=useState(false)
  function openWindow(check : boolean){
    setVisibility(x=>x=check)
   setMsg("")
  }
  function setMyMsg(newMsg : string){
      setMsg(newMsg)
      console.log(newMsg)
  }

  const data ={name:''}
    async function submitting(event: FormEvent<HTMLFormElement>) {
      event.preventDefault()
   
      const responsePro = await fetch('https://dev.next.core.yatouze.com/api/yatouze/profiles', {
        method: 'POST',
        headers:{
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODE2NDEzNCwiZXhwIjoxNzQ4NTk2MTM0fQ.Ipi0GxLPi-uWBx2QAvZe8HQjou6wNj3rwXscolpv1hA",
        'Content-Type': 'application/json',
        "accept":"*/*"
        },
        body: JSON.stringify({
            "name": profil,
            "departmentId": idDep,
            "departmentName": dep

        }),
      })
      const newMsg = await responsePro.json().catch(()=>{setMyMsg("Erreur")})
      newMsg ? setMyMsg(newMsg.message) : setMyMsg("Erreur")
     
    }
    
  //<WindowDep isVisible={visibility?"":"hidden"} leBooleen={visibility}/>
  const listeDep =  liste.liste.map((x:any)=>x.props)
 
  return(
    <>    
      <div className="border border-[#BFBFBF80] flex justify-between p-2 md:uppercase font-semibold text-sm bg-gray-50 rounded p-3 border-0 mb-4 font-bold text-smaller md:text-large uppercase font-sans">
        <div className="flex ">
                <p className="content-center text-black w-full font-bold">Profil</p>
                <p className="bg-(--currentColor) rounded-full w-10 content-center h-7 text-center font-bold">{liste.nu}</p>
        </div>
        <div>
        <p className="text-black w-full font-bold">Departement</p>
        </div>
        <div>
        <p className="text-black w-full font-bold">Actions</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div></div>
        <button onClick={()=>{openWindow(true)}}><img className="cursor-pointer hover:scale-110 duration-300 border p-2 rounded-full shadow-md shadow-gray-500 fill-(--currentColor)" src="/plus-svgrepo-com.svg" alt="plus" width="40" height="40"/></button>
      </div>
        <form action="" onSubmit={ submitting}>
          <div className={"text-white right-0 top-1/2 fixed border rounded border-gray-300 p-5 shadow-lg shadow-gray-500 flex flex-col items-center bg-white "+( visibility?"":"hidden")}>
            <p className="text-black" >Nouveau Profil :</p>
            <input required onChange={(event)=>{
              setProfil(event.target.value)
              }} name="name" className="border rounded  text-black bg-white p-1" type="text" />
            <select name="departements" id="" onChange={(event)=>{
              setDep(event.target.value)
              setidDep(event.target.selectedOptions[0].id )
              
            }}>
              {listeDep.map((x:any)=>{return(
                <option id={x.id} selected={x.children=="Autre" ? true : false}  className="bg-gray-500" value={x.children}>{x.children}</option>
                )})}
            </select>
            <div className="flex flex-row gap-5 pt-5 ">
              <button type="button" onClick={()=>{openWindow(false)}} className="border text-black bg-white p-1">Quitter</button>
              <button type="submit"  className="border rounded text-wite bg-(--currentColor) p-1">Ajouter</button>
              
            </div>
            {msg!=""&&<p>{msg}</p>}
          </div>
        </form>
         </>
  )     
}