"use client"

import { keyGerry } from "@/app/components/key"
import { useEffect, useState } from "react"
type Depart={

}
export default function Rep(
  idProfil:{
    idProfil:number
    nbpage:number
  }
  

){
  const [depart,setDepart]=useState<Depart[]>([])
    const [loading, setLoading] =useState(true)
    useEffect(
      ()=>{
        async function fetchData(){
          try{
          let apiDepartement = await fetch("https://dev.next.core.yatouze.com/api/yatouze/departments?size=10&page="+idProfil.nbpage,
          {headers:{
            Authorization: keyGerry
          }}
          )
          const response = await apiDepartement.json()
          setDepart(response)
           console.log(response)
        
      }catch(err){
        if(err instanceof Error){
          console.log(err)
        }
      }finally{
        setLoading(false)
      }}
        fetchData()
      },[]
    )
    if(loading) return "loading..."
   function findLength(){
    let count =0
    
    let numb = depart.data.map((x:any)=>{
            if(idProfil.idProfil===x.id){
                  return(      
                   x.profile.map((y:any)=>count+=y.users.length)
                  )}})
       return count
          }  
  return(
    <> 
      
      {findLength()}
      
    
    </>
                
  )
}