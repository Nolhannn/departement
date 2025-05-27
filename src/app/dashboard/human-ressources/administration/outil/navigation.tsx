"use client"

import { useEffect, useState } from "react"
import { depNav } from "../api/depNav"

export default function Navigation({
  nextPage
}: {
  nextPage: (n:string) => void
}){
  //const [nb,setNb] = useState(1)
 
  return(
         depNav >10  ?
           (<div>
            <p>Page :</p> 
            <button onClick={()=>{nextPage("previous")}}><img src="/left-arrow.svg" alt="left arrow" width={40} height={40} className="border rounded-full p-2 cursor-pointer"/></button>
            <button onClick={()=>{nextPage("next")}}><img src="/right-arrow.svg" alt="right arrow" width={40} height={40} className='border rounded-full p-2 cursor-pointer'/></button>
          </div>):
           <p>Page : 1/1</p> 
    
  )
}