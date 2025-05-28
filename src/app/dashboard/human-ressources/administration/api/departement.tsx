"use client"
import { useEffect, useState } from "react"
import BoutonPro from "../outil/boutonPro"
import { proNav } from "./proNav"
export default function List(){
    const [depart,setDepart]=useState()
    const [loading,setLoading]=useState(true)
    useEffect(
      ()=>{
        async function fetchData(){
            try{const apiDepart = await fetch("https://dev.next.core.yatouze.com/api/yatouze/departments?size=10",
          {headers:{
            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODE2NDEzNCwiZXhwIjoxNzQ4NTk2MTM0fQ.Ipi0GxLPi-uWBx2QAvZe8HQjou6wNj3rwXscolpv1hA"
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
      <BoutonPro nu={proNav} liste={ depart.data.map((x : any)=><option id={x.id}>{x.name}</option>)}/>
    )
    }