"use client"
import { useEffect, useState } from "react"
import List from "../api/departement"
import { proNav } from "../api/proNav"
import NavigationPro from "../outil/navigationPro"
type Profil = {
  id : number
  name : string
}
export default  function Profil(){
  const [nb,setNb]=useState(1)
    const [profi,setProfi]=useState<Profil[]>([])
    const [loading, setLoading] =useState(true)
    function next(n:string){
      if(n==="next"){
      if(nb<Math.ceil(proNav/10))
      setNb(x=>x=x+1)
    }else{
      if(nb>1)
      setNb(x=>x=x-1)
    }
    }
    useEffect(
      ()=>{
        async function fetchData(){
          try{
          let apiProfil = await fetch("https://dev.next.core.yatouze.com/api/yatouze/profiles?size=10&page="+nb,
          {headers:{
            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODE2NDEzNCwiZXhwIjoxNzQ4NTk2MTM0fQ.Ipi0GxLPi-uWBx2QAvZe8HQjou6wNj3rwXscolpv1hA"
          }}
          )
          const response = await apiProfil.json()
          setProfi(response)
           console.log(response)
        
      }catch(err){
        if(err instanceof Error){
          console.log(err)
        }
      }finally{
        setLoading(false)
      }}
        fetchData()
      },[nb]
    )
    if(loading) return "loading..."
    return (
      <>
        <div className=" bg-white mt-10 min-h-100"> 
        <div className="flex relative">
          <List/>
        </div>
        <div className=" p-5 w-full">
            {
          profi.data.map((x:any)=>{return( 
            <div className="flex">
                <p className="text-black p-5 w-full">{x.name}</p>
                <p className=" text-black p-5 w-full">
                {x.department.name}
                </p>
                </div>)}
              
        )}
         </div>
        <NavigationPro nextPage={next}/>
              </div>
      </>
      
  
    )
}