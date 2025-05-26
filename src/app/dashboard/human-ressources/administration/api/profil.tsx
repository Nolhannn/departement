import BoutonUser from "../outil/boutonUser"
export default async function ListProfil(){
      
    
    const apiProfils = await fetch("https://dev.next.core.yatouze.com/api/yatouze/profiles?size=20",
    {headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODE2NDEzNCwiZXhwIjoxNzQ4NTk2MTM0fQ.Ipi0GxLPi-uWBx2QAvZe8HQjou6wNj3rwXscolpv1hA"
    }}
    )

    const varia=  await apiProfils.json()
    console.log(varia.data.map((x : any)=><option id={x.id}>{x.name}</option>))

    return (
      
           <BoutonUser liste={ varia.data.map((x : any)=><option id={x.id}>{x.name}</option>)}/>

    )
    }