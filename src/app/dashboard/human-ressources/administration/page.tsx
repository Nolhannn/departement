'use client'

import { useRouter } from "next/navigation"

export default function Administration(){
   const router = useRouter()
     router.push('/dashboard/human-ressources/administration/departement')
    
 return(
   <div>
      Administration
    </div>
    )
}