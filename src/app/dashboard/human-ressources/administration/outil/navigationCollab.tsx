"use client"

import { useEffect, useState } from "react"
import { proNav } from "../api/proNav"
import { collabNav } from "../api/collabNav"

export default function NavigationCollab(
  nextpage
: {
  page:number
  nextPage: (n:string) => void
}){
  //const [nb,setNb] = useState(1)
 
  return(
         collabNav >10  ?
           (<div className="flex">
            
            <button className="mr-4" onClick={()=>{nextpage.nextPage("previous")}}><img src="/left-arrow.svg" alt="left arrow" width={40} height={40} className="border rounded-full p-2 cursor-pointer"/></button>
            <p className="self-center">Page : {nextpage.page}</p>
            <button className="ml-4" onClick={()=>{nextpage.nextPage("next")}}><img src="/right-arrow.svg" alt="right arrow" width={40} height={40} className='border rounded-full p-2 cursor-pointer'/></button>
          </div>):""
    
  )
}