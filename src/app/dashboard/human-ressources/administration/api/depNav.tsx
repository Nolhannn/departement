import { Slabo_13px } from "next/font/google"

const apiDepartement = await fetch("https://dev.next.core.yatouze.com/api/yatouze/departments?size=10",
    {headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODU5NjQzNSwiZXhwIjoxNzQ5MDI4NDM1fQ.nMGU6qM-NRotV6m7hHdhzUjp7Git6zHPkOe8qzNfu5s"
    }}
    )
    const response = await apiDepartement.json()
 export const depNav= response.meta.totalItems
    
  
