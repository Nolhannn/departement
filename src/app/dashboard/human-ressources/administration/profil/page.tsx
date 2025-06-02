"use client"
import { useEffect, useState } from "react"
import List from "../api/departement"
import { proNav } from "../api/proNav"
import NavigationPro from "../outil/navigationPro" 
import DeletePro from "../outil/deletePro"
import ModificationPro from "../outil/modificationPro"
type Profil = {
  id : number
  name : string
}
export default  function Profil(){
  const [nb,setNb]=useState(1)
    const [profi,setProfi]=useState<Profil[]>([])
    const [loading, setLoading] =useState(true)
  const [active,setActive] = useState("pointer-events-auto ")
  
  const[alphabet,setAlphabet] = useState("&alphabet=true")
  const[recherche,setRecherche] = useState("")
  function alphabetOn(x:string){
    console.log(x)
    if(x==="alphabétique"){
      setAlphabet('&alphabet=true')
    }else{
      setAlphabet("")
    }
  }
  function rechercheOn(x:string){
    setRecherche("&name="+x)
  }
    
  function actionOn(x:boolean){
    if(x==true){
    setActive(" pointer-events-none fill-(--currentColorOpa)")
  }else{
    setActive(" pointer-events-auto ")
  }
  }
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
          let apiProfil = await fetch("https://dev.next.core.yatouze.com/api/yatouze/profiles?size=10&page="+nb+alphabet+recherche,
          {headers:{
            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODU5NjQzNSwiZXhwIjoxNzQ5MDI4NDM1fQ.nMGU6qM-NRotV6m7hHdhzUjp7Git6zHPkOe8qzNfu5s"
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
      },[nb,alphabet,recherche]
    )
    if(loading) return "loading..."
    return (
      <>
        <div className="w-full  border shadow-md shadow-gray-500  h-[calc(100vh-11rem)]"> 
        <div className="">
          <List fct={actionOn} alph={alphabetOn} rech={rechercheOn}  active={active}/>
        </div>
        <div className="w-full mt-4 overflow-y-scroll">
            
        {
          profi.data.map((x:any)=>{return( 
            <div key={x.id} className="flex flex-row">
              <div className="w-2/5">
                <p className="text-black p-5 w-full">{x.name}</p>
              </div>
              <div className="w-2/5">
                <p className=" text-black p-5 w-full">
                {x.department.name}
                </p>
              </div>
                <div className={"w-1/5 flex items-center justify-end space-x-2 !mr-2 "}>
                      <ModificationPro active={active} proID={x.id} proName={x.name} depID={x.department.id} depName={x.department.name} fct={actionOn}/>
                      <DeletePro fct={actionOn} active={active} proID={x.id} proName={x.name} />
                </div>
              </div>)}
              
        )}
         
         </div>
         
        
        <div className="text-black justify-center items-center gap-5 flex">
          
        <NavigationPro page={nb} nextPage={next}/>

         </div>
         </div>
      </>
      
  
    )
}