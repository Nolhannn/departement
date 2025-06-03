const apiProfil = await fetch("https://dev.next.core.yatouze.com/api/yatouze/profiles",
    {headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODU5NjQzNSwiZXhwIjoxNzQ5MDI4NDM1fQ.nMGU6qM-NRotV6m7hHdhzUjp7Git6zHPkOe8qzNfu5s"
    }}
    )
    const response = await apiProfil.json()
 export const proNav= response.meta.totalItems  
 export const listeProfiles = response
    
  
