import { keyGerry } from "@/app/components/key"
import { Slabo_13px } from "next/font/google"

const apiDepartement = await fetch("https://dev.next.core.yatouze.com/api/yatouze/departments",
    {headers:{
      Authorization: keyGerry
    }}
    )
    const response = await apiDepartement.json()
 export const depNav= response.meta.totalItems
 export const depName = response
    
  
