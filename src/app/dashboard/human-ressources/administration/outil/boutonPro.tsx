"use client"
import { FormEvent, useState } from "react"
import ListeDepartement from "../api/departement"
export default function BoutonPro(
  liste : {
    liste : any
  }
){
 
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
        <p className="text-black p-5 w-full font-bold">Profil</p>
        <p className="text-black p-5 w-full font-bold">Département</p>
        <button onClick={()=>{openWindow(true)}}><img src="/plus-svgrepo-com.svg" alt="plus" width="40" height="40"/></button>
        <form action="" onSubmit={ submitting}>
          <div className={"text-white right-0 top-1/2 fixed border p-5 flex flex-col items-center bg-gray-500 "+( visibility?"":"hidden")}>
            <p className="text-white" >Nouveau Profil :</p>
            <input required onChange={(event)=>{
            console.log("Value :" + event.target.value)
              setProfil(event.target.value)
              }} name="name" className="border text-black bg-white p-1" type="text" />
            <select name="departements" id="" onChange={(event)=>{
              console.log("Id : "+event.target.selectedOptions[0].id )
              setDep(event.target.value)
              setidDep(event.target.selectedOptions[0].id )
              
            }}>
              {listeDep.map((x:any)=>{return(
                <option id={x.id} selected={x.children=="Autre" ? true : false}  className="bg-gray-500" value={x.children}>{x.children}</option>
                )})}
            </select>
            <div className="flex flex-row gap-5 pt-5">
              <button type="button" onClick={()=>{openWindow(false)}} className="border text-black bg-white p-1">Quitter</button>
              <button type="submit"  className="border text-black bg-white p-1">Ajouter</button>
              
            </div>
            {msg!=""&&<p>{msg}</p>}
          </div>
        </form>
         </>
  )     
}