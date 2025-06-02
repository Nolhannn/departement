"use client"
import { useEffect, useState } from "react"
import NavAdministration from "./administration"
import NavDisponibilite from "./disponibilite"
import NavRectrutement from "./rectrutement"
import { useRouter } from "next/navigation"

export default function Arrow({redirectManual}:{redirectManual :boolean}){
  const router = useRouter()
  const [admin, setAdmin]=useState(true)
  useEffect(
    ()=>{
      if(redirectManual===true && admin===true){ //ici que le cas avec admin
      changeRH()
      changeAdmin()
    }

    },[redirectManual]
  )
  function changeAdmin(){
    setAdmin(x=>x=!x)
    if(admin==true){
      setDispo(x=>x=true)
      setRecrut(x=>x=true)
      router?.push('/dashboard/human-ressources/administration/departement')
      
    }else{
       router?.push('/')
    }
  }
  const propsAd={
    etatAd:admin
  }
 const [dispo, setDispo]=useState(true)
  function changeDispo(){
    setDispo(x=>x=!x)
     if(dispo==true){
    setAdmin(x=>x=true)
    setRecrut(x=>x=true)
     }else{
       router?.push('/')
    }
  }
  const propsDp={
    etatDp:dispo
  }
  const [recrut, setRecrut]=useState(true)
  function changeRecrut(){
    setRecrut(x=>x=!x)
     if(recrut==true){
      setDispo(x=>x=true)
      setAdmin(x=>x=true)
     }else{
       router?.push('/')
    }
  }
  const propsRc={
    etatRc:recrut
  }
  let pa 
  pa= ()=>{ 
    if(typeof window !== 'undefined'){
     return window.location.pathname.split("/").findLast((element) => element)
    }
    }
  const [rh,setRH] = useState(pa==='departement'||"profil"||"collaborateurs"?true:false)  
  useEffect(()=>{
    changeRH()
  },[])
  function changeRH(){
    setRH(y=>{
      return y=!y
    }
  )
  
  }
  if(rh==true){
    return <>
           <button onClick={()=>changeRH()} className="cursor-pointer flex gap-5 flex"> 
              <p className="text-(--currentColor)">Ressources Humaines</p>
              <img src="/arrow-up.svg" alt="arrow" width="20" height="20" />
            </button>
            <button onClick={()=>changeAdmin()} className="cursor-pointer flex gap-5">
            <NavAdministration etatAd={admin}/>
            </button>
            <button onClick={()=>changeRecrut()} className="cursor-pointer flex gap-5">
               <NavRectrutement etatRc={recrut}/>
            </button>
            <button onClick={()=>changeDispo()} className="cursor-pointer flex gap-5" >
              <NavDisponibilite etatDp={dispo}/>
            </button>
          </>
  }else{
    return <>
          <button onClick={()=>changeRH()} className="cursor-pointer flex gap-5 flex-row"> 
            <p>Ressources Humaines</p>
            <img src="/arrow-down.svg" alt="arrow" width="20" height="20" />
          </button>
          </>
  }
  
  
}