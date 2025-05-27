"use client"
import BoutonDep from '../outil/boutonDep'
import Navigation from '../outil/navigation'
import   {DepApi} from '../api/dep'
import { depNav } from '../api/depNav'
import Rep from '../outil/counter'
import { Suspense, useEffect, useState } from 'react'

type Depart = {
  id : number
  name : string
}
export  default function Departement(){
  const [nb,setNb]=useState(1)
  const [depart,setDepart]=useState<Depart[]>([])
  const [loading, setLoading] =useState(true)
  function next(n:string){
    if(n==="next"){
    if(nb<Math.ceil(depNav/10))
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
        let apiDepartement = await fetch("https://dev.next.core.yatouze.com/api/yatouze/departments?size=10&page="+nb,
        {headers:{
          Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODE2NDEzNCwiZXhwIjoxNzQ4NTk2MTM0fQ.Ipi0GxLPi-uWBx2QAvZe8HQjou6wNj3rwXscolpv1hA"
        }}
        )
        const response = await apiDepartement.json()
        setDepart(response)
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
        <BoutonDep/>
      </div>  
      <div className=" p-5 w-full">
        <Suspense fallback="loading">
        {<>
              {depart.data.map((x:any)=>{return( 
                        <div className="flex">
                            <p className="text-black p-5 w-full">{x.name}</p>
                            <p className=" text-black p-5 w-full">
                              <Rep nbpage={nb} idProfil={x.id}></Rep>
                            </p>
                            </div>
                            )}
                          
                    )}
               
              </>} 
            </Suspense>          
       </div>
      <div className="text-black justify-center items-center gap-5 flex">

        {  depNav >10  ?
            <Navigation nextPage={next}/>:"" }
          
      </div>
     </div>
    </>
    

  )
}