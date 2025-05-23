import BoutonPro from "../outil/boutonPro"
export default async function List(){
      const apiProfiles = await fetch("https://dev.next.core.yatouze.com/api/yatouze/profiles",
    {headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0NzY2MDg4OCwiZXhwIjoxNzQ4MDkyODg4fQ._VQ13I_GkX-K5Q32j8q5xOMcs0O-aMp79BP9MWczI_4"
    }}
    )
    const variab=  await apiProfiles.json()
    return (
      
     
      <BoutonPro liste={ variab.data.map((x : any)=><option id={x.id}>{x.name}</option>)}/>
    )
    }