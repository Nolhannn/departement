import { keyGerry } from "@/app/components/key"

const apiCollab = await fetch("https://dev.next.core.yatouze.com/api/yatouze/users/all?",
    {headers:{
      Authorization: keyGerry
    }}
    )
    const response = await apiCollab.json()
    let count=0
    response.data.map(x=>count=count+1)
 export const collabNav= count
  export const col=response
  
