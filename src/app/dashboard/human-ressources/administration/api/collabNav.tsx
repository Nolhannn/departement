const apiCollab = await fetch("https://dev.next.core.yatouze.com/api/yatouze/users/all?",
    {headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODU5NjQzNSwiZXhwIjoxNzQ5MDI4NDM1fQ.nMGU6qM-NRotV6m7hHdhzUjp7Git6zHPkOe8qzNfu5s"
    }}
    )
    const response = await apiCollab.json()
    let count=0
    response.data.map(x=>count=count+1)
 export const collabNav= count
  export const col=response
  
