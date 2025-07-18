"use client"

import { FormEvent, useEffect, useState } from "react"
import { depName } from "../api/depNav"
import { keyGerry } from "@/app/components/key"
export default function Detail(
  liste : {
    liste : any   
    opener : ()=>void
    active : string
    colab : any
  }
){
 /*{
}*/
  const [nom, setNom]=useState("")
  const [prenom, setPrenom]=useState("")
  const [email, setEmail]=useState("")
  const [civilite, setCivilite]=useState("")
  const [profil, setProfil]=useState("")
  const [tel, setTel]=useState("")
  const [msg,setMsg]=useState('')

  const [adresse, setadresse]=useState("")
  const [idCollaborateur, setidCollaborateur]=useState("")
  const [pays, setPays]=useState("")
  const [city, setCity]=useState("")
  const [monthlyIncome, setmonthlyIncome]=useState("")
  const [currency, setcurrency]=useState("")
  const [postalCode, setpostalCode]=useState("")
  const [tel2, setTel2]=useState("")
  const [workStartDate, setWorkStartDate]=useState("")
  const [img, setImg]=useState("https://dev.app.yatouze.com/_next/static/media/logo_placeholder.16c7ed30.png")
  const [visibility, setVisibility]=useState(false)
  const [src,setSrc]=useState()
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
      formData.append("address",adresse)
      formData.append("idCollaborateur",idCollaborateur)
      formData.append("country",pays)
      formData.append("city",city)
      formData.append("monthlyIncome",monthlyIncome)
      formData.append("currency",currency)
      formData.append("postalCode",postalCode)
      formData.append("phoneNumberTwo",tel2)
      formData.append("workStartDate",workStartDate)
      formData.append("profilePhoto",img)
      const response = await fetch('https://dev.next.core.yatouze.com/api/yatouze/users', {
        method: 'POST',
        headers:{
        Authorization: keyGerry,
        "accept":"application/json",
        
        },
        body:formData
      }) 
      const newMsg = await response.json().catch(()=>{setMyMsg("Erreur")})
      newMsg ? setMyMsg(newMsg.message) : setMyMsg("Erreur")
    } 
     const listePro =  liste.liste.map((x:any)=>x.props)
     useEffect(()=>{
      
      }
   ,[img])
  return(
    <>
        <form encType="multipart/form-data" action="" onSubmit={ submitting}>
        {liste.colab.data.map(x=>{
        return(
          <div className="bg-black width-300 height-300">
            <div className={"text-black right-0 top-1/20 fixed border rounded border-gray-300 p-5 shadow-lg shadow-gray-500 flex flex-col items-center bg-white "}>
            <p className="" >Modification utilisateur :</p>
            <div className="w-full grid grid-cols-2 gap-y-[38px] gap-x-[71px] my-3">
              <div className="flex flex-col">
                <div className="flex">Image du profil :</div>
                 <label htmlFor="imgP" ><img src={img } alt="" width={110} height={110}/></label>
                <input onChange={(event)=>{
                  setSrc(URL.createObjectURL(event.target.files[0]))
                  setImg(src?src:event.target.files[0])
                  }} id="imgP" type="file" name="imgProfil" accept="image/*" hidden/>
                
              </div>
              <div className="flex flex-col">
              
                <div className="flex">Nom :<p className="text-red-500">*</p></div>
                <input required onChange={(event)=>setNom(event.target.value)} name="nom" className="border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">

                <div className="flex">Prénom :<p className="text-red-500">*</p></div>
                <input required onChange={(event)=>setPrenom(event.target.value)} name="prenom" className="border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">
                <p className="">ID :</p>
                <input required onChange={(event)=>setidCollaborateur(event.target.value)} name="idCollaborateur" className="border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">
                <div className="flex">Civilité :<p className="text-red-500">*</p></div>
                <select required  onChange={(event)=>setCivilite(event.target.selectedOptions[0].value)} name="civilite" className="border text-black bg-white p-1" >
                <option key='defaultKey'  defaultValue="Monsieur"  >Choisissez une civilité ...</option>
                  <option value="Monsieur">Monsieur</option>
                  <option value="Madame">Madame</option>
                  <option value="Mademoiselle">Mademoiselle</option>
                  <option value="Autre">Autre</option>
                </select> 
              </div>
              <div className="flex flex-col">
                <div className="flex">Profil :<p className="text-red-500">*</p></div>
                <select name="profil" className=" border text-black bg-white p-1" id="" onChange={(event)=>{
                  setProfil(event.target.selectedOptions[0].id )
                  }}>
                <option key='defaultKey' id="69" defaultValue="Invité"  >Choisissez un profil ...</option>

               {listePro.map((x:any)=>{
                return(
                
                <option key={x.id} id={x.id}  value={x.children}>{x.children}</option>
                )
              })
                }
            </select>
              </div>
              <div className="flex flex-col">
               <div className="flex">Email :<p className="text-red-500">*</p></div>
                <input required onChange={(event)=>setEmail(event.target.value)} name="email" className=" border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">
                <div className="flex">Téléphone :<p className="text-red-500">*</p></div>
                <input required onChange={(event)=>setTel(event.target.value)} name="tel" className=" border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">
                <p className="">Deuxième Téléphone :</p>
                <input onChange={(event)=>setTel2(event.target.value)} name="tel2" className="  border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">
                <p className="">adresse :</p>
                <input  onChange={(event)=>setadresse(event.target.value)} name="adresse" className=" border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">
                <p className="">Pays :</p>
                <input  onChange={(event)=>setPays(event.target.value)} name="pays" className="  border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">
                <p className="">Ville :</p>
                <input  onChange={(event)=>setCity(event.target.value)} name="ville" className=" border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">
                <p className="">Code postale :</p>
                <input  onChange={(event)=>setpostalCode(event.target.value)} name="codepostal" className=" border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">
                <p className="">Paie mensuelle :</p>
                <input  onChange={(event)=>setmonthlyIncome(event.target.value)} name="paie" className=" border text-black bg-white p-1" type="text" />
                <select onChange={(event)=>setcurrency(event.target.selectedOptions[0].value)} name="devise" className=" border text-black bg-white p-1" >
                  <option defaultValue="EUR" key="defaultKey">Choisissez une devise...</option>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                </select> 
              </div>
              <div className="flex flex-col">
                <p className="">Début du contrat :</p>
                <input onChange={(event)=>setWorkStartDate(event.target.value)} name="workStartDate" className="  border text-black bg-white p-1" type="date" />
              </div>
            </div>
            <div className="flex flex-row gap-5 pt-5">
              <button type="button" onClick={()=>{liste.opener()}} className="border text-black bg-white p-1">Quitter</button>
              <button type="submit" className="border rounded text-white bg-(--currentColor) p-1">Ajouter</button>
              
            </div>
            {msg!=""&&<p>{msg}</p>}
          </div>
          </div>)
})}
        </form>
         </>
  )     
}
/*
div className="w-full grid grid-cols-2 gap-y-[38px] gap-x-[71px] my-3">
              <div className="flex flex-col">
                <div className="flex">Image du profil :</div>
                 <label htmlFor="imgP" ><img src={img } alt="" width={110} height={110}/></label>
                <input onChange={(event)=>{
                  setSrc(URL.createObjectURL(event.target.files[0]))
                  setImg(src?src:event.target.files[0])
                  }} id="imgP" type="file" name="imgProfil" accept="image/*" hidden/>
                
              </div>
              <div className="flex flex-col">
              
                <div className="flex">Nom :<p className="text-red-500">*</p></div>
                <input required onChange={(event)=>setNom(event.target.value)} name="nom" className="border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">

                <div className="flex">Prénom :<p className="text-red-500">*</p></div>
                <input required onChange={(event)=>setPrenom(event.target.value)} name="prenom" className="border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">
                <p className="">ID :</p>
                <input required onChange={(event)=>setidCollaborateur(event.target.value)} name="idCollaborateur" className="border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">
                <div className="flex">Civilité :<p className="text-red-500">*</p></div>
                <select required  onChange={(event)=>setCivilite(event.target.selectedOptions[0].value)} name="civilite" className="border text-black bg-white p-1" >
                <option key='defaultKey'  defaultValue="Monsieur"  >Choisissez une civilité ...</option>
                  <option value="Monsieur">Monsieur</option>
                  <option value="Madame">Madame</option>
                  <option value="Mademoiselle">Mademoiselle</option>
                  <option value="Autre">Autre</option>
                </select> 
              </div>
              <div className="flex flex-col">
                <div className="flex">Profil :<p className="text-red-500">*</p></div>
                <select name="profil" className=" border text-black bg-white p-1" id="" onChange={(event)=>{
                  setProfil(event.target.selectedOptions[0].id )
                  }}>
                <option key='defaultKey' id="69" defaultValue="Invité"  >Choisissez un profil ...</option>

               {listePro.map((x:any)=>{
                return(
                
                <option key={x.id} id={x.id}  value={x.children}>{x.children}</option>
                )
              })
                }
            </select>
              </div>
              <div className="flex flex-col">
               <div className="flex">Email :<p className="text-red-500">*</p></div>
                <input required onChange={(event)=>setEmail(event.target.value)} name="email" className=" border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">
                <div className="flex">Téléphone :<p className="text-red-500">*</p></div>
                <input required onChange={(event)=>setTel(event.target.value)} name="tel" className=" border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">
                <p className="">Deuxième Téléphone :</p>
                <input onChange={(event)=>setTel2(event.target.value)} name="tel2" className="  border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">
                <p className="">adresse :</p>
                <input  onChange={(event)=>setadresse(event.target.value)} name="adresse" className=" border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">
                <p className="">Pays :</p>
                <input  onChange={(event)=>setPays(event.target.value)} name="pays" className="  border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">
                <p className="">Ville :</p>
                <input  onChange={(event)=>setCity(event.target.value)} name="ville" className=" border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">
                <p className="">Code postale :</p>
                <input  onChange={(event)=>setpostalCode(event.target.value)} name="codepostal" className=" border text-black bg-white p-1" type="text" />
              </div>
              <div className="flex flex-col">
                <p className="">Paie mensuelle :</p>
                <input  onChange={(event)=>setmonthlyIncome(event.target.value)} name="paie" className=" border text-black bg-white p-1" type="text" />
                <select onChange={(event)=>setcurrency(event.target.selectedOptions[0].value)} name="devise" className=" border text-black bg-white p-1" >
                  <option defaultValue="EUR" key="defaultKey">Choisissez une devise...</option>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                </select> 
              </div>
              <div className="flex flex-col">
                <p className="">Début du contrat :</p>
                <input onChange={(event)=>setWorkStartDate(event.target.value)} name="workStartDate" className="  border text-black bg-white p-1" type="date" />
              </div>
            </div>
            <div className="flex flex-row gap-5 pt-5">
              <button type="button" onClick={()=>{opener()}} className="border text-black bg-white p-1">Quitter</button>
              <button type="submit" className="border rounded text-white bg-(--currentColor) p-1">Ajouter</button>
              
            </div>
*/