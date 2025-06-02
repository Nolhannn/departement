"use client"
import { FormEvent, useEffect, useState } from "react"
export default function Modification(
  listeDep:{
    depID : number
    depName : string     
    active : string
    fct : (x:boolean)=>void
  }
){
  const [refresh, setRefresh] = useState(false);   
  const [visibility, setVisibility]=useState(false)
  const  [dep, setDep]=useState("")
  function openWindow(check : boolean){
    setVisibility(x=>x=check)
     listeDep.fct(check)
  }
  async function submitting(event: FormEvent<HTMLFormElement>) {
      event.preventDefault()
    try {
      const formData = event.currentTarget.input
      console.log(formData)
      const response = await fetch('https://dev.next.core.yatouze.com/api/yatouze/departments/'+listeDep.depID, {
        method: 'PUT',
        headers:{
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODU5NjQzNSwiZXhwIjoxNzQ5MDI4NDM1fQ.nMGU6qM-NRotV6m7hHdhzUjp7Git6zHPkOe8qzNfu5s",
        'Content-Type': 'application/json',
        "accept":"*/*"
        },
        body: JSON.stringify({
          name: dep,
          "attributePermission": [
            1,
            2,
            3
          ],
          "permissionDetails": [
            "Devis",
            "Factures",
            "Avoirs"
          ]
        })      
    } )}finally {
      window.location.href = "/departement";
      setRefresh(!refresh); // This forces a re-render
    }
  }
    
    
  
  return(
    <>
      <button onClick={()=>{openWindow(true)}} type="button" className={"text-danger text-smaller flex sm:text-2xl hover:scale-110 duration-300"+listeDep.active}>
          <svg className={"cursor-pointer text-larger "+listeDep.active} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M2.25 13.5H5.25C5.475 13.5 5.625 13.425 5.775 13.275L14.025 5.025C14.325 4.725 14.325 4.275 14.025 3.975L11.025 0.975C10.725 0.675 10.275 0.675 9.975 0.975L1.725 9.225C1.575 9.375 1.5 9.525 1.5 9.75V12.75C1.5 13.2 1.8 13.5 2.25 13.5ZM3 10.05L10.5 2.55L12.45 4.5L4.95 12H3V10.05ZM15.75 17.25C16.2 17.25 16.5 16.95 16.5 16.5C16.5 16.05 16.2 15.75 15.75 15.75H2.25C1.8 15.75 1.5 16.05 1.5 16.5C1.5 16.95 1.8 17.25 2.25 17.25H15.75Z" fill="#737272"/>
          <mask id="mask0_43_6985"  maskUnits="userSpaceOnUse" x="1" y="0" width="18" height="18">
          <path fillRule="evenodd" clipRule="evenodd" d="M2.25 13.5H5.25C5.475 13.5 5.625 13.425 5.775 13.275L14.025 5.025C14.325 4.725 14.325 4.275 14.025 3.975L11.025 0.975C10.725 0.675 10.275 0.675 9.975 0.975L1.725 9.225C1.575 9.375 1.5 9.525 1.5 9.75V12.75C1.5 13.2 1.8 13.5 2.25 13.5ZM3 10.05L10.5 2.55L12.45 4.5L4.95 12H3V10.05ZM15.75 17.25C16.2 17.25 16.5 16.95 16.5 16.5C16.5 16.05 16.2 15.75 15.75 15.75H2.25C1.8 15.75 1.5 16.05 1.5 16.5C1.5 16.95 1.8 17.25 2.25 17.25H15.75Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_43_6985)">
          <rect width="18" height="18" fill="#14468C" className={listeDep.active}/>
          </g>
          </svg>
      </button>
        <form action="./" onSubmit={submitting}>
          <div className={"text-white right-0 top-1/2 fixed border p-5 flex flex-col items-center bg-white shadow-md shadow-gray-500 border-gray-500 "+( visibility?"":"hidden")}>
            <p className="text-black" >Voulez vous vraiment modifier {listeDep.depName} ? </p>
           <input required onChange={(event)=>{
              setDep(event.target.value)
              }} name="name" className="border text-black bg-white p-1" type="text" />
            <div className="flex flex-row gap-5 pt-5">
              <button type="button" onClick={()=>{openWindow(false)}} className="border rounded text-black bg-white p-1">Non</button>
              <button type="submit" onClick={()=>{openWindow(false)}} className="border rounded text-white bg-(--currentColor) p-2">Oui</button>  
            </div>
          </div>
        </form>
       
         </>
  )     
}