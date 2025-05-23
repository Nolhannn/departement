import BoutonUser from "../outil/boutonUser"
export default async function ListProfil(){
      
    
    const apiProfils = await fetch("https://dev.next.core.yatouze.com/api/yatouze/profiles?size=20",
    {headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0NzY2MDg4OCwiZXhwIjoxNzQ4MDkyODg4fQ._VQ13I_GkX-K5Q32j8q5xOMcs0O-aMp79BP9MWczI_4"
    }}
    )

    const varia=  await apiProfils.json()
    console.log(varia.data.map((x : any)=><option id={x.id}>{x.name}</option>))

    return (
      
           <BoutonUser liste={ varia.data.map((x : any)=><option id={x.id}>{x.name}</option>)}/>

    )
    }