'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter()
   const [pa, setPa]  = useState(window.location.pathname.split("/").findLast((element) => element))
   function setter(go:string){
     if(go=="departement"){
        setStyleDep(w=>{ return{...w, dep:"bg-white cursor-pointer text-blue-500 border-2 p-2 min-w-40 rounded shadow-md shadow-black"}})

      }else{
        setStyleDep(w=>{ return{...w, dep:"bg-white cursor-pointer border-2 p-2 min-w-40 rounded shadow-md shadow-black"}})
      }
      if(go=="profil"){
        setStyleDep(w=>{ return{...w, pro:"bg-white cursor-pointer text-blue-500 border-2 p-2 min-w-40 rounded shadow-md shadow-black"}})

      }else{
        setStyleDep(w=>{ return{...w, pro:"bg-white cursor-pointer border-2 p-2 min-w-40 rounded shadow-md shadow-black"}})

      }
      if("collaborateurs"==go){
        setStyleDep(w=>{ return{...w, collab:"bg-white cursor-pointer text-blue-500 border-2 p-2 min-w-40 rounded shadow-md shadow-black"}})
        
      }else{
        setStyleDep(w=>{ return{...w, collab:"bg-white cursor-pointer border-2 p-2 min-w-40 rounded shadow-md shadow-black"}})
      }
      router?.push('/dashboard/human-ressources/administration/'+go)
   }
    console.log(pa)
   
const [styleDep,setStyleDep] = useState({
      dep:"",
      pro:"",
      collab:""
    })
    useEffect(
      ()=>{
        console.log("fhbuvjdhnlsck,")
      if(pa=="departement"){
        setStyleDep(w=>{ return{...w, dep:"bg-white cursor-pointer text-blue-500 border-2 p-2 min-w-40 rounded shadow-md shadow-black"}})
        router?.push('/dashboard/human-ressources/administration/departement')

      }else{
        setStyleDep(w=>{ return{...w, dep:"bg-white cursor-pointer border-2 p-2 min-w-40 rounded shadow-md shadow-black"}})
      }
      if(pa=="profil"){
        setStyleDep(w=>{ return{...w, pro:"bg-white cursor-pointer text-blue-500 border-2 p-2 min-w-40 rounded shadow-md shadow-black"}})
        router?.push('/dashboard/human-ressources/administration/profil')

      }else{
        setStyleDep(w=>{ return{...w, pro:"bg-white cursor-pointer border-2 p-2 min-w-40 rounded shadow-md shadow-black"}})

      }
      if("collaborateurs"==pa){
        setStyleDep(w=>{ return{...w, collab:"bg-white cursor-pointer text-blue-500 border-2 p-2 min-w-40 rounded shadow-md shadow-black"}})
        router?.push('/dashboard/human-ressources/administration/collaborateurs')
        
      }else{
        setStyleDep(w=>{ return{...w, collab:"bg-white cursor-pointer border-2 p-2 min-w-40 rounded shadow-md shadow-black"}})
      }

      },[pa]
    )
  return (
        <div className=" min-h-4/5 p-5 ">
          <ul className="flex min-w fit gap-5 text-black">
            <li><button onClick={()=>{   setter('departement')    
}} className={styleDep.dep}>Département</button></li>
            <li><button onClick={()=>{       setter('profil')
}} className={styleDep.pro}>Profil</button></li>
            <li><button onClick={()=>{setter('collaborateurs')
}} className={styleDep.collab}>Collaborateurs/users</button></li>
            <li><button className="bg-white border-2 p-2 min-w-40 rounded shadow-md shadow-black">Exemple</button></li>
            <li><button className="bg-white border-2 p-2 min-w-40 rounded shadow-md shadow-black">Configurations</button></li>
          </ul>
          {children}
        </div>
  );
}