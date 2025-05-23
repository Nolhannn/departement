'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
     
    const router = useRouter()
    const [departement, setDepartement]=useState(false)
    
    function selectDep(){
      
      if(departement==true){
        setDepartement(x=>x=!x) 
        setProfil(x=>x=true)
        setCollaborateurs(x=>x=true)
        router?.push('/dashboard/human-ressources/administration/departement')
        
      }
    } 
    
   const [profil, setProfil]=useState(true)
    function selectPro(){
      
       if(profil==true){
        setProfil(x=>x=!x)
        setCollaborateurs(x=>x=true)
        setDepartement(x=>x=true)
        router?.push('/dashboard/human-ressources/administration/profil')

       }
    }
    const [collaborateurs, setCollaborateurs]=useState(true)
    function selectCollab(){
     
       if(collaborateurs==true){
        setCollaborateurs(x=>x=!x)
        setProfil(x=>x=true)
        setDepartement(x=>x=true)
        router?.push('/dashboard/human-ressources/administration/collaborateurs')

       }
    }
const [styleDep,setStyleDep] = useState({
      dep:"",
      pro:"",
      collab:""
    })
    useEffect(
      ()=>{
        if(departement==false){
        setStyleDep(w=>{ return{...w, dep:"bg-white cursor-pointer text-blue-500 border-2 p-2 min-w-40 rounded shadow-md shadow-black"}})
      }else{
        setStyleDep(w=>{ return{...w, dep:"bg-white cursor-pointer border-2 p-2 min-w-40 rounded shadow-md shadow-black"}})
      }
      if(profil==false){
        setStyleDep(w=>{ return{...w, pro:"bg-white cursor-pointer text-blue-500 border-2 p-2 min-w-40 rounded shadow-md shadow-black"}})
      }else{
        setStyleDep(w=>{ return{...w, pro:"bg-white cursor-pointer border-2 p-2 min-w-40 rounded shadow-md shadow-black"}})
      }
      if(collaborateurs==false){
        setStyleDep(w=>{ return{...w, collab:"bg-white cursor-pointer text-blue-500 border-2 p-2 min-w-40 rounded shadow-md shadow-black"}})
      }else{
        setStyleDep(w=>{ return{...w, collab:"bg-white cursor-pointer border-2 p-2 min-w-40 rounded shadow-md shadow-black"}})
      }
      console.log(styleDep)
      },[departement,profil,collaborateurs]
    )
  return (
        <div className=" min-h-4/5 p-5 ">
          <ul className="flex min-w fit gap-5 text-black">
            <li><button onClick={()=>{selectDep()}} className={styleDep.dep}>Département</button></li>
            <li><button onClick={()=>{selectPro()}} className={styleDep.pro}>Profil</button></li>
            <li><button onClick={()=>{selectCollab()}} className={styleDep.collab}>Collaborateurs/users</button></li>
            <li><button className="bg-white border-2 p-2 min-w-40 rounded shadow-md shadow-black">Exemple</button></li>
            <li><button className="bg-white border-2 p-2 min-w-40 rounded shadow-md shadow-black">Configurations</button></li>
          </ul>
          {children}
        </div>
  );
}