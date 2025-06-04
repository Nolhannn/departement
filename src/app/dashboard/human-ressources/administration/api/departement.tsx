"use client"
import { useEffect, useState } from "react"
import BoutonPro from "../outil/boutonPro"
import { proNav } from "./proNav"
import { keyGerry } from "@/app/components/key"
export default function List(
  liste:{
    
    active : string
    fct : (x:boolean)=>void
    rech : (x:string)=>void
    alph : (x:string)=>void
  }
){
    const [depart,setDepart]=useState()
    const [loading,setLoading]=useState(true)
    useEffect(
      ()=>{
        async function fetchData(){
            try{const apiDepart = await fetch("https://dev.next.core.yatouze.com/api/yatouze/departments?size=10",
          {headers:{
            Authorization:  keyGerry
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
      <BoutonPro active={liste.active} alph={liste.alph} rech={liste.rech} fct={liste.fct} nu={proNav} liste={ depart.data.map((x : any)=><option id={x.id}>{x.name}</option>)}/>
    )
    }