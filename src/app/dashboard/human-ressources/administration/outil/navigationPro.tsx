"use client"

import { useEffect, useState } from "react"
import { proNav } from "../api/proNav"

export default function NavigationPro(
  nextPage
: {
  nextPage: (n:string) => void
  page:number
}){
  //const [nb,setNb] = useState(1)
 
  return(
      
         proNav >10  ?
           (
            <>
              <button className="mr-4" onClick={()=>{nextPage.nextPage("previous")}}><img src="/left-arrow.svg" alt="left arrow" width={40} height={40} className="border rounded-full p-2 cursor-pointer"/></button>
            <p>Page : {nextPage.page}</p> 
            <button className="ml-4" onClick={()=>{nextPage.nextPage("next")}}><img src="/right-arrow.svg" alt="right arrow" width={40} height={40} className='border rounded-full p-2 cursor-pointer'/></button>
          </>
        ):""
    
  )
}