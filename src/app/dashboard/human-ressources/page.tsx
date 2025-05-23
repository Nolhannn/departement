  'use client'
  import { useRouter } from "next/navigation"
  
  export default function HumanRessources(){
    const router = useRouter()
    router.push('/dashboard/human-ressources/administration/departement')
   return(
     <div>
        HR
      </div>
      )
  }
