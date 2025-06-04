"use client"
import { FormEvent, useEffect, useState } from "react"
import { depNav } from "../api/depNav"
import { useRouter } from "next/navigation"
import { keyGerry } from "@/app/components/key"
export default function Delete(
  listeDep:{
    depID : number
    depName : string 
    active : string
    fct : (x:boolean)=>void
  }
){
  const [refresh, setRefresh] = useState(false);   
  const [visibility, setVisibility]=useState(false)
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
        method: 'DELETE',
        headers:{
        Authorization: keyGerry,
        'Content-Type': 'application/json',
        "accept":"*/*"
        }
      })
    } catch (error) {
      
    } finally {
      window.location.href = "/departement";
      setRefresh(!refresh); // This forces a re-render
    }
    }
  return(
    <>
      <button onClick={()=>{openWindow(true)}} type="button" className={"text-danger text-smaller flex sm:text-2xl hover:scale-110 duration-300"+listeDep.active}>
            
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.75 3.75H12.75V3C12.75 1.725 11.775 0.75 10.5 0.75H7.5C6.225 0.75 5.25 1.725 5.25 3V3.75H2.25C1.8 3.75 1.5 4.05 1.5 4.5C1.5 4.95 1.8 5.25 2.25 5.25H3V15C3 16.275 3.975 17.25 5.25 17.25H12.75C14.025 17.25 15 16.275 15 15V5.25H15.75C16.2 5.25 16.5 4.95 16.5 4.5C16.5 4.05 16.2 3.75 15.75 3.75ZM6.75 3C6.75 2.55 7.05 2.25 7.5 2.25H10.5C10.95 2.25 11.25 2.55 11.25 3V3.75H6.75V3ZM12.75 15.75C13.2 15.75 13.5 15.45 13.5 15V5.25H4.5V15C4.5 15.45 4.8 15.75 5.25 15.75H12.75ZM8.25 8.25V12.75C8.25 13.2 7.95 13.5 7.5 13.5C7.05 13.5 6.75 13.2 6.75 12.75V8.25C6.75 7.8 7.05 7.5 7.5 7.5C7.95 7.5 8.25 7.8 8.25 8.25ZM11.25 12.75V8.25C11.25 7.8 10.95 7.5 10.5 7.5C10.05 7.5 9.75 7.8 9.75 8.25V12.75C9.75 13.2 10.05 13.5 10.5 13.5C10.95 13.5 11.25 13.2 11.25 12.75Z" fill="#DE2828"/>
            <mask id="mask0_43_6986" maskUnits="userSpaceOnUse" x="1" y="0" width="16" height="18">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.75 3.75H12.75V3C12.75 1.725 11.775 0.75 10.5 0.75H7.5C6.225 0.75 5.25 1.725 5.25 3V3.75H2.25C1.8 3.75 1.5 4.05 1.5 4.5C1.5 4.95 1.8 5.25 2.25 5.25H3V15C3 16.275 3.975 17.25 5.25 17.25H12.75C14.025 17.25 15 16.275 15 15V5.25H15.75C16.2 5.25 16.5 4.95 16.5 4.5C16.5 4.05 16.2 3.75 15.75 3.75ZM6.75 3C6.75 2.55 7.05 2.25 7.5 2.25H10.5C10.95 2.25 11.25 2.55 11.25 3V3.75H6.75V3ZM12.75 15.75C13.2 15.75 13.5 15.45 13.5 15V5.25H4.5V15C4.5 15.45 4.8 15.75 5.25 15.75H12.75ZM8.25 8.25V12.75C8.25 13.2 7.95 13.5 7.5 13.5C7.05 13.5 6.75 13.2 6.75 12.75V8.25C6.75 7.8 7.05 7.5 7.5 7.5C7.95 7.5 8.25 7.8 8.25 8.25ZM11.25 12.75V8.25C11.25 7.8 10.95 7.5 10.5 7.5C10.05 7.5 9.75 7.8 9.75 8.25V12.75C9.75 13.2 10.05 13.5 10.5 13.5C10.95 13.5 11.25 13.2 11.25 12.75Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_43_6986)">
            <rect width="18" height="18" fill="#DE2828" className={listeDep.active}/>
            </g>
            </svg>

      </button>
        <form action="./" onSubmit={submitting}>
          <div className={"text-white right-0 top-1/2 fixed border p-5 flex flex-col items-center bg-white shadow-md shadow-gray-500 border-gray-500 "+( visibility?"":"hidden")}>
            <p className="text-black" >Voulez vous vraiment supprimer {listeDep.depName} ? </p>
           
            <div className="flex flex-row gap-5 pt-5">
              <button type="button" onClick={()=>{openWindow(false)}} className="border rounded text-black p-1">Non</button>
              <button type="submit" onClick={()=>{openWindow(false)}} className="border rounded text-white bg-(--currentColor) p-2">Oui</button>  
            </div>
          </div>
        </form>
       
         </>
  )     
}