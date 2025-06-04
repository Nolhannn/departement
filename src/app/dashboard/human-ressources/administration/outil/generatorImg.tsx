import { keyGerry } from "@/app/components/key"
import { Slabo_13px } from "next/font/google"

const apiDepartement = await fetch("https://dev.next.core.yatouze.com/api/yatouze/avatar",
    {headers:{
      Authorization: keyGerry
    }}
    )
    const response = await apiDepartement.json()
    
    
    let random= ""
    
   

    export default function Random(
      props : {
        checker : boolean
        randomNb : number
        profilePhoto : string
      }
    ){
      response.data.map(x=>{if(x.id===props.randomNb)random=x.url})
      return(
        <img src={props.checker? props.profilePhoto : random }  width={160} height={100} />
      )
    }