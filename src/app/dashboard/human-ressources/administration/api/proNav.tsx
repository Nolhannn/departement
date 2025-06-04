import { keyGerry } from "@/app/components/key"

const apiProfil = await fetch("https://dev.next.core.yatouze.com/api/yatouze/profiles",
    {headers:{
      Authorization: keyGerry
    }}
    )
    const response = await apiProfil.json()
 export const proNav= response.meta.totalItems  
 export const listeProfiles = response
    
  
