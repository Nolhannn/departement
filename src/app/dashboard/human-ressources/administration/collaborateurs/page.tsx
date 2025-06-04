"use client"
import { useEffect, useState } from "react"
import ListProfil, { profilex } from "../api/profil"
import BoutonUser from "../outil/boutonUser"
import { collabNav } from "../api/collabNav"
import NavigationCollab from "../outil/navigationCollab"
import RandomIMG, { random } from "../outil/generatorImg"
import Random from "../outil/generatorImg"
import Detail from "../outil/detail"
import { listeProfiles } from "../api/proNav"
import { keyGerry } from "@/app/components/key"

export default function Collaborateurs(){
  const [nb,setNb]=useState(1)
  const [collab,setCollab]=useState()
  const [loading,setLoading]=useState(true)
   const [active,setActive] = useState("pointer-events-auto")
  const[dep,setDep] = useState("")
  const[recherche,setRecherche] = useState("")
  const[detail,setDetail]=useState(false)
  function DepOn(x:string){
    if(x===""||x==="Tous"){
      setDep("")
    }else{
      setDep('&departmentId='+x)

    }
  }
  function rechercheOn(x:string){
    if(x===""||x===" "){
      setRecherche("")
    }else{
    setRecherche("&character="+x)
    }
  }
    
  function actionOn(x:boolean){
    if(x==true){
    setActive(" pointer-events-none fill-(--currentColorOpa)")
  }else{
    setActive(" pointer-events-auto ")
  }
  }
  function detailOpen(){
    setDetail(x=>x=!x)
  }
  useEffect(
    ()=>{
      async function fetchData(){
        try{
           const apiCollaborateurs = await fetch("https://dev.next.core.yatouze.com/api/yatouze/users/all?size=6&page="+nb+dep+recherche,
          {headers:{
            Authorization: keyGerry
            
          }}
          )
          const response = await apiCollaborateurs.json()
          setCollab(response)
        }finally{
          setLoading(false)
        }
        
      }
      fetchData()
    },[nb,dep,recherche]
  )
  function next(n:string){
      if(n==="next"){
        console.log(collabNav)
      if(nb<Math.ceil(collabNav/6))
      setNb(x=>x=x+1)
    }else{
      if(nb>1)
      setNb(x=>x=x-1)
    }
    }
    let randomize = Math.round(Math.random()*(32-1)+1)
   const defaultIMG = "https://yatouze-s3-bucket.s3.amazonaws.com/8250a25270b5617d0f5d2359c4e6f2.png"
   if(loading){return "loading..."}
   return (
     <>
       <div className=" bg-white mt-1 min-h-100"> 
       <div className="flex flex-col relative">
        <ListProfil  active={active} fct={actionOn} rech={rechercheOn} dep={DepOn} />
       </div>
       <div className="w-full mt-4 h-[calc(100vh-25rem)] gap-5 overflow-y-scroll flex-1 flex flex-wrap p-2">
           {
         collab.data.map((x:any)=>{return( 
           <div key={x.id} className="flex flex-1 p-5 shadow-md shadow-gray-500">
            <div>
            <Random randomNb={Math.round(Math.random()*(32-1)+1)} checker={x.profilePhoto?true:false} profilePhoto={x.profilePhoto}/>
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
              <div className="text-right content-end flex-auto">
                <button onClick={detailOpen}>
                  <img alt="Voir détails" loading="lazy" width="30" height="31" decoding="async" data-nimg="1" className="text-primary text-smaller sm:text-2xl hover:scale-110 duration-300 cursor-pointer" src="https://dev.app.yatouze.com/_next/static/media/full-screen-icon.b70a10a5.svg"></img>
                </button>
              </div>
              </div>)
              }
             
       )}
        
        </div>
        <div className={detail==true ? "":"hidden"}>
          <Detail colab={collab} liste={ listeProfiles.data.map((x : any)=><option id={x.id}>{x.name}</option>)} active={active} opener={detailOpen}/>
        </div>
        <div className="text-black justify-center items-center gap-5 flex flex-col">
         
        {  collabNav >10  ?
                    <NavigationCollab page={nb} nextPage={next}/>:"" }

        </div>
             </div>
     </>
     
 
   )
 }