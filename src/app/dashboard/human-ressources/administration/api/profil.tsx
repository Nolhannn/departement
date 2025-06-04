"use client"
import { useEffect, useState } from "react"
import BoutonUser from "../outil/boutonUser"
import { keyGerry } from "@/app/components/key"
export default function ListProfil(
  props: {
    fct :(x:boolean)=>void
    active : string
    rech : (x:string)=>void
    dep : (x:string)=>void
  }
){
      
    const [profil,setProfil]=useState()
    const [laoding, setLaoding]=useState(true)
    useEffect(()=>{
      async function fetchData(){
        try{
          const apiProfils = await fetch("https://dev.next.core.yatouze.com/api/yatouze/profiles?size=10",
          {headers:{
            Authorization: keyGerry
          }}
          )
          const varia=  await apiProfils.json()
          setProfil(varia)

        }finally{
          setLaoding(false)
        }
        
      }
      fetchData()
    },[]
  )
 
if(laoding){return "loading..."}
    return (
      
           <BoutonUser active={props.active} fct={props.fct} rech={props.rech} dep={props.dep} liste={ profil.data.map((x : any)=><option id={x.id}>{x.name}</option>)}/>

    )
    }
