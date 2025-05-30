"use client"
import { useEffect, useState } from "react"
import BoutonUser from "../outil/boutonUser"
export default function ListProfil(){
      
    const [profil,setProfil]=useState()
    const [laoding, setLaoding]=useState(true)
    useEffect(()=>{
      async function fetchData(){
        try{
          const apiProfils = await fetch("https://dev.next.core.yatouze.com/api/yatouze/profiles?size=10",
          {headers:{
            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODU5NjQzNSwiZXhwIjoxNzQ5MDI4NDM1fQ.nMGU6qM-NRotV6m7hHdhzUjp7Git6zHPkOe8qzNfu5s"
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
      
           <BoutonUser liste={ profil.data.map((x : any)=><option id={x.id}>{x.name}</option>)}/>

    )
    }