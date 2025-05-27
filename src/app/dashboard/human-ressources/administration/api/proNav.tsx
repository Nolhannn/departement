const apiProfil = await fetch("https://dev.next.core.yatouze.com/api/yatouze/profiles?size=10",
    {headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODE2NDEzNCwiZXhwIjoxNzQ4NTk2MTM0fQ.Ipi0GxLPi-uWBx2QAvZe8HQjou6wNj3rwXscolpv1hA"
    }}
    )
    const response = await apiProfil.json()
 export const proNav= response.meta.totalItems
    
  
