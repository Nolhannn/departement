"use client"

import { FormEvent, useState } from "react"
export default function BoutonUser(
  liste : {
    liste : any
  }
){
 
  const [nom, setNom]=useState("")
  const [prenom, setPrenom]=useState("")
  const [email, setEmail]=useState("")
  const [civilite, setCivilite]=useState("")
  const [profil, setProfil]=useState("")
  const [tel, setTel]=useState("")
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
      
      let formData = new FormData()
      formData.append("firstName",prenom)
      formData.append("lastName",nom)
      formData.append("email",email)
      formData.append("civility",civilite)
      formData.append("phoneNumberOne",tel)
      formData.append("profileId",profil)
      const response = await fetch('https://dev.next.core.yatouze.com/api/yatouze/users', {
        method: 'POST',
        headers:{
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODE2NDEzNCwiZXhwIjoxNzQ4NTk2MTM0fQ.Ipi0GxLPi-uWBx2QAvZe8HQjou6wNj3rwXscolpv1hA",
        "accept":"application/json",
        
        },
        body:formData
      }) 
      const newMsg = await response.json().catch(()=>{setMyMsg("Erreur")})
      newMsg ? setMyMsg(newMsg.message) : setMyMsg("Erreur")
    } 
     const listePro =  liste.liste.map((x:any)=>x.props)
    
  return(
    <>
        <p className="text-black p-5 w-full font-bold">Collaborateurs</p>
        <button onClick={()=>{openWindow(true)}}><img src="/plus-svgrepo-com.svg" alt="plus" width="40" height="40" className="cursor-pointer hover:scale-110 duration-300 border p-2 rounded-full shadow-md shadow-gray-500 fill-(--currentColor)"/></button>
        <form encType="multipart/form-data" action="" onSubmit={ submitting}>
          <div className={"text-white right-0 top-1/2 fixed border p-5 flex flex-col items-center bg-gray-500 "+( visibility?"":"hidden")}>
            <p className="text-white" >Nouveau collaborateur :</p>
            <div>
              <div className="flex">
                <p>Nom :</p>
                <input required onChange={(event)=>setNom(event.target.value)} name="nom" className="border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex">
                <p>Prénom :</p>
                <input required onChange={(event)=>setPrenom(event.target.value)} name="prenom" className="border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex">
                <p>Civilité :</p>
                <select required  onChange={(event)=>setCivilite(event.target.selectedOptions[0].value)} name="civilite" className="border text-black bg-white p-1" >
                  <option selected value="Monsieur">Monsieur</option>
                  <option value="Madame">Madame</option>
                  <option value="Mademoiselle">Mademoiselle</option>
                  <option value="Autre">Autre</option>
                </select> 
              </div>
              <div className="flex">
                <p>Profil :</p>
                <select name="profil" className="border text-black bg-white p-1" id="" onChange={(event)=>{
                  setProfil(event.target.selectedOptions[0].id )
                  }}>
               {listePro.map((x:any)=>{
                return(
                
                <option  id={x.id}  selected={x.children=="Invité" ? true : false}  value={x.children}>{x.children}</option>
                )
              })
                }
            </select>
              </div>
              <div className="flex">
                <p>Email :</p>
                <input required onChange={(event)=>setEmail(event.target.value)} name="email" className="border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex">
                <p>Téléphone :</p>
                <input required onChange={(event)=>setTel(event.target.value)} name="tel" className="border text-black bg-white p-1" type="text" />
              </div>
            </div>
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