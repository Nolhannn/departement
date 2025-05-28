"use client"

import { useEffect, useState } from "react"
import { proNav } from "../api/proNav"
import { collabNav } from "../api/collabNav"

export default function NavigationCollab({
  nextPage
}: {
  nextPage: (n:string) => void,
  page:number
}){
  //const [nb,setNb] = useState(1)
 
  return(
         collabNav >10  ?
           (<div >
            
            <button className="mr-4" onClick={()=>{nextPage("previous")}}><img src="/left-arrow.svg" alt="left arrow" width={40} height={40} className="border rounded-full p-2 cursor-pointer"/></button>
            <button className="ml-4" onClick={()=>{nextPage("next")}}><img src="/right-arrow.svg" alt="right arrow" width={40} height={40} className='border rounded-full p-2 cursor-pointer'/></button>
          </div>):""
    
  )
}