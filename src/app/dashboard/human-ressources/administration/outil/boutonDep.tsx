"use client"

import { FormEvent, useState } from "react"
import { depNav } from "../api/depNav"
import { keyGerry } from "@/app/components/key"
export default function BoutonDep(
  listeDep:{
    active : string
    fct : (x:boolean)=>void
    rech : (x:string)=>void
    alph : (x:string)=>void
  }
){
  const [refresh, setRefresh] = useState(false);   
  const [dep, setDep]=useState("")
  const [msg,setMsg]=useState('')
  const [visibility, setVisibility]=useState(false)
  function openWindow(check : boolean){
    setVisibility(x=>x=check)
   setMsg("")
   listeDep.fct(check)
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
        Authorization: keyGerry,
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
      <div className="text-black flex justify-between">
              <div className="flex flex-col items-center"> 
              <div className="mr-2 inline-block font-semibold text-nowrap">Trier par</div>
              <select onChange={(e)=>listeDep.alph(e.target.value)} >
                <option value="alphabétique" >Ordre alphabétique</option>
                <option value="création"  >Ordre de création</option>
              </select>
              </div>
              <div className="flex items-center border border-gray-500 p-4 rounded">
                  <input onChange={(e)=>listeDep.rech(e.target.value)} className="outline-none" placeholder="Rechercher..." type="text" />
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
              </div>
     
        <button onClick={()=>{openWindow(true)}}>
        <svg className={"border cursor-pointer hover:scale-110 duration-300 p-2 rounded-full shadow-md shadow-gray-500 "+listeDep.active}  fill="#14468c" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
          width="40px" height="40px" viewBox="0 0 45.402 45.402"
          >
        <g>
          <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
            c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
            c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
            c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
        </g>
        </svg>
        </button>
      </div>
        <form action="" onSubmit={ submitting}>
          <div className={"text-white right-0 top-1/2 fixed border rounded border-gray-300 p-5 shadow-lg shadow-gray-500 flex flex-col items-center bg-white "+( visibility?"":"hidden")}>
            <p className="text-black" >Nouveau département :</p>
            <input required onChange={(event)=>setDep(event.target.value)} name="name" className="border rounded  text-black bg-white p-1" type="text" />
            <div className="flex flex-row gap-5 pt-5">
              <button type="button" onClick={()=>{openWindow(false)}} className="border text-black bg-white p-1">Quitter</button>
              <button type="submit" className="border rounded text-wite bg-(--currentColor) p-1">Ajouter</button>
              
            </div>
            {msg!=""&&<p>{msg}</p>}
          </div>
        </form>
       
         </>
  )     
}