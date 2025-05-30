"use client"
import { useEffect, useState } from "react"
import BoutonPro from "../outil/boutonPro"
import { proNav } from "./proNav"
export default function List(
  liste:{
    
    active : string
    fct : (x:boolean)=>void
  }
){
    const [depart,setDepart]=useState()
    const [loading,setLoading]=useState(true)
    useEffect(
      ()=>{
        async function fetchData(){
            try{const apiDepart = await fetch("https://dev.next.core.yatouze.com/api/yatouze/departments?size=10",
          {headers:{
            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODU5NjQzNSwiZXhwIjoxNzQ5MDI4NDM1fQ.nMGU6qM-NRotV6m7hHdhzUjp7Git6zHPkOe8qzNfu5s"
          }})
          const variab=  await apiDepart.json()
          setDepart(variab)
          console.log(variab)
        }finally{
        setLoading(x=>false)
      }
      }
      fetchData()
      },[]
    )
      if(loading) return "loading..."
    
    return (
      <BoutonPro active={liste.active} fct={liste.fct} nu={proNav} liste={ depart.data.map((x : any)=><option id={x.id}>{x.name}</option>)}/>
    )
    }