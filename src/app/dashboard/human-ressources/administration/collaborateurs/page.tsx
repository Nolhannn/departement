"use client"
import { useEffect, useState } from "react"
import ListProfil from "../api/profil"
import BoutonUser from "../outil/boutonUser"
import { collabNav } from "../api/collabNav"
import NavigationCollab from "../outil/navigationCollab"

export default function Collaborateurs(){
  const [nb,setNb]=useState(1)
  const [collab,setCollab]=useState()
  const [loading,setLoading]=useState(true)
  useEffect(
    ()=>{
      async function fetchData(){
        try{
           const apiCollaborateurs = await fetch("https://dev.next.core.yatouze.com/api/yatouze/users/all?size=6&page="+nb,
          {headers:{
            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODE2NDEzNCwiZXhwIjoxNzQ4NTk2MTM0fQ.Ipi0GxLPi-uWBx2QAvZe8HQjou6wNj3rwXscolpv1hA"
          }}
          )
          const response = await apiCollaborateurs.json()
          setCollab(response)
        }finally{
          setLoading(false)
        }
        
      }
      fetchData()
    },[nb]
  )
  function next(n:string){
      if(n==="next"){
      if(nb<Math.ceil(collabNav/10))
      setNb(x=>x=x+1)
    }else{
      if(nb>1)
      setNb(x=>x=x-1)
    }
    }
   if(loading){return "loading..."}
   return (
     <>
       <div className=" bg-white mt-10 min-h-100"> 
       <div className="flex relative">
        <ListProfil/>
       </div>
       <div className="w-full mt-4 h-[calc(100vh-30rem)] overflow-y-scroll flex flex-wrap">
           {
         collab.data.map((x:any)=>{return( 
           <div className="flex p-5">
            <div>
            <img src={x.profilePhoto? x.profilePhoto : "https://yatouze-s3-bucket.s3.amazonaws.com/8250a25270b5617d0f5d2359c4e6f2.png"} alt="" width={160} height={100} />
              <div className="flex gap-1 text-black pl-3 w-full"><p className="font-bold">Statut: </p><p>{x.status?x.status:"Hors service"}</p></div>
            </div>
            <div className="flex gap-0 flex-col">
               <p className="text-black pl-3 w-full">{x.firstName + " " + x.lastName}</p>
               <p className=" text-white w-fit bg-blue-500 p-2 m-3 rounded-xl h-fit">
                {x.profile?.name}
               </p>
              <div className=" flex gap-1 text-black pl-3 w-full"><p className="font-bold">Email: </p><p>{x.email}</p></div>
              <div className=" flex gap-1 text-black pl-3 w-full"><p className="font-bold">Téléphone: </p><p>{x.phoneNumberOne}</p></div>
              <div className=" flex gap-1 text-black pl-3 w-full"><p className="font-bold">Prise de service: </p><p>{(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(new Date(x.createdAt)).replaceAll("/"," - "))}</p></div>
              </div>
              </div>)
              }
             
       )}
        
        </div>
        <div className="text-black justify-center items-center gap-5 flex flex-col">
          <p>Page : {nb}</p> 
        {  collabNav >10  ?
                    <NavigationCollab page={nb} nextPage={next}/>:"" }

        </div>
             </div>
     </>
     
 
   )
 }