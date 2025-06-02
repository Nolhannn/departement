'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const seletionnerColor = "p-2 rounded shadow-md shadow-gray-500 cursor-pointer text-center text-large sm:text-lg w-full  flex-1 text-[#fff] bg-[var(--currentColor)] font-semibold"
  const regularColor = "p-2 bg-white rounded shadow-md shadow-gray-500 cursor-pointer text-center text-large sm:text-lg w-full  flex-1 text-gray-500"
  const router = useRouter()
   const [pa, setPa]  = useState("")
   function setter(go:string){
     if(go=="departement"){
        setStyleDep(w=>{ return{...w, dep:seletionnerColor}})

      }else{
        setStyleDep(w=>{ return{...w, dep:regularColor}})
      }
      if(go=="profil"){
        setStyleDep(w=>{ return{...w, pro:seletionnerColor}})

      }else{
        setStyleDep(w=>{ return{...w, pro:regularColor}})

      }
      if("collaborateurs"==go){
        setStyleDep(w=>{ return{...w, collab:seletionnerColor}})
        
      }else{
        setStyleDep(w=>{ return{...w, collab:regularColor}})
      }
      router?.push('/dashboard/human-ressources/administration/'+go)

   }
   
const [styleDep,setStyleDep] = useState({
      dep:"",
      pro:"",
      collab:""
    })
    useEffect(
      ()=>{
      router?.push('/dashboard/human-ressources/administration/'+pa)

        setPa(window.location.pathname.split("/").findLast((element) => element)||"")
      if(pa=="departement"){
        setStyleDep(w=>{ return{...w, dep:seletionnerColor}})

      }else{
        setStyleDep(w=>{ return{...w, dep:regularColor}})
      }
      if(pa=="profil"){
        setStyleDep(w=>{ return{...w, pro:seletionnerColor}})

      }else{
        setStyleDep(w=>{ return{...w, pro:regularColor}})

      }
      if("collaborateurs"==pa){
        setStyleDep(w=>{ return{...w, collab:seletionnerColor}})
        
      }else{
        setStyleDep(w=>{ return{...w, collab:regularColor}})
      }

      },[pa]
    )
  return (
        <div className="w-full h-fit ">
          <ul className="flex justify-between gap-2 p-3 w-full flex-row">
            <li className="flex-1"><button onClick={()=>{   setter('departement')    
}} className={styleDep.dep}>Département</button></li>
            <li className="flex-1 justify-center"><button onClick={()=>{       setter('profil')
}} className={styleDep.pro}>Profil</button></li>
            <li className="flex-1"><button onClick={()=>{setter('collaborateurs')
}} className={styleDep.collab}>Collaborateurs/users</button></li>
            </ul>
          {children}
        </div>
  );
}