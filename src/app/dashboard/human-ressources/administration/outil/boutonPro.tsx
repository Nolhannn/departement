"use client"

import { FormEvent, useState } from "react" 
import { proNav } from "../api/proNav"
export default function BoutonPro(
  liste : {
    liste : any
    nu:number
    active : string
    fct : (x:boolean)=>void
  }
){
 let nu=proNav
  const [refresh, setRefresh] = useState(false);   
  const [dep, setDep]=useState("Autre")
  const [profil, setProfil]=useState("")
  const [idDep, setidDep]=useState("45")
  const [msg,setMsg]=useState('')
  const [visibility, setVisibility]=useState(false)
  function openWindow(check : boolean){
    setVisibility(x=>x=check)
   setMsg("")
    liste.fct(check)
  }
  function setMyMsg(newMsg : string){
      setMsg(newMsg)
      console.log(newMsg)
  }

  const data ={name:''}
    async function submitting(event: FormEvent<HTMLFormElement>) {
      event.preventDefault()
      try{
      const responsePro = await fetch('https://dev.next.core.yatouze.com/api/yatouze/profiles', {
        method: 'POST',
        headers:{
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODU5NjQzNSwiZXhwIjoxNzQ5MDI4NDM1fQ.nMGU6qM-NRotV6m7hHdhzUjp7Git6zHPkOe8qzNfu5s",
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
        
      } finally {
      openWindow(false)
      window.location.href = "/profil";
      setRefresh(!refresh); // This forces a re-render
    }
     
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
        <button onClick={()=>{openWindow(true)}}>
          <svg className={"border cursor-pointer hover:scale-110 duration-300 p-2 rounded-full shadow-md shadow-gray-500 "+liste.active}  fill="#14468c" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
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
          <div className={"text-black right-0 top-1/2 fixed border rounded border-gray-300 p-5 shadow-lg shadow-gray-500 flex flex-col items-center bg-white gap-3 "+( visibility?"":"hidden")}>
            <p className="text-black" >Nouveau Profil :</p>
            <input required onChange={(event)=>{
              setProfil(event.target.value)
              }} name="name" className="border rounded  text-black bg-white p-1" type="text" />
            <select className="border rounded border-black p-2 pr-3 pl-3" name="departements" id="" onChange={(event)=>{
              setDep(event.target.value)
              setidDep(event.target.selectedOptions[0].id )
              
            }}>
              <option key="defaultkey" id="45" defaultValue="Autre" className="bg-gray-500" >Choisissez un département...</option>

              {listeDep.map((x:any)=>{return(
                <option key={x.id} id={x.id} className="bg-gray-500" value={x.children}>{x.children}</option>
                )})}
            </select>
            <div className="flex flex-row gap-5 pt-5 ">
              <button type="button" onClick={()=>{openWindow(false)}} className="border text-black bg-white p-1">Quitter</button>
              <button type="submit"  className="border rounded text-white bg-(--currentColor) p-1">Ajouter</button>
              
            </div>
            {msg!=""&&<p>{msg}</p>}
          </div>
        </form>
         </>
  )     
}