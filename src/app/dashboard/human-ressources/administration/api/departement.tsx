import BoutonPro from "../outil/boutonPro"
export default async function List(){
      const apiProfiles = await fetch("https://dev.next.core.yatouze.com/api/yatouze/profiles",
    {headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODE2NDEzNCwiZXhwIjoxNzQ4NTk2MTM0fQ.Ipi0GxLPi-uWBx2QAvZe8HQjou6wNj3rwXscolpv1hA"
    }}
    )
    const variab=  await apiProfiles.json()
    return (
      
     
      <BoutonPro liste={ variab.data.map((x : any)=><option id={x.id}>{x.name}</option>)}/>
    )
    }