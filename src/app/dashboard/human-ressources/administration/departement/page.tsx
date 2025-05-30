"use client"
import BoutonDep from '../outil/boutonDep'
import Navigation from '../outil/navigation'
import   {DepApi} from '../api/dep'
import { depNav } from '../api/depNav'
import Rep from '../outil/counter'
import { Suspense, useEffect, useState } from 'react'
import Delete from '../outil/delete'
import Modification from '../outil/modification'

type Depart = {
  id : number
  name : string
}
export  default function Departement(){
  const [nb,setNb]=useState(1)
  const [depart,setDepart]=useState<Depart[]>([])
  const [loading, setLoading] =useState(true)
   const [active,setActive] = useState("pointer-events-auto")
    
  function actionOn(x:boolean){
    if(x==true){
    setActive(" pointer-events-none fill-(--currentColorOpa)")
  }else{
    setActive(" pointer-events-auto ")
  }
  }
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
          Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODU5NjQzNSwiZXhwIjoxNzQ5MDI4NDM1fQ.nMGU6qM-NRotV6m7hHdhzUjp7Git6zHPkOe8qzNfu5s"
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
      <div className="border shadow-md shadow-gray-500 h-fit max-h-[calc(100vh-11rem)]"> 
      
      <div className=" ">
        <div className="">
        <BoutonDep fct={actionOn} active={active}/>
      </div> 
       <Suspense fallback="loading">
        {<>
              {depart.data.map((x:any)=>{return( 
                        <div className="border border-[#BFBFBF80] false flex justify-between hover:bg-opacity-60 duration-100 odd:bg-gray-100 even:bg-gray-150 p-3 border-0 text-smaller sm:text-large">
                            <div className="w-2/5">
                              <p className="text-black p-1 w-full">{x.name}</p>
                            </div>
                            <div className="w-2/5">
                            <p className="text-black text-center p-1 w-full">
                                <Rep nbpage={nb} idProfil={x.id}></Rep>
                            </p>
                            </div>
                              
                            <div className="w-1/5 text-right">
                            <div className="flex items-center justify-end space-x-2 !mr-2">
                                  <Modification fct={actionOn} active={active} depID={x.id} depName={x.name}/>
                                  <Delete fct={actionOn} active={active} depID={x.id} depName={x.name}/>
                            </div>
                            </div>
                            </div>
                            )}
                          
                    )}
               
              </>} 
            </Suspense>          
       </div>
      <div className="text-black justify-center items-center gap-5 flex flex-col">
          <p>Page : {nb}</p> 
        {  depNav >10  ?
            <Navigation nextPage={next}/>:"" }
          
      </div>
     </div>
     
    </>
    

  )
}