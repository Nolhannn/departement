/*import { Suspense } from "react"
import Departement from "../departement/page"
export default async function Rout(){
  const apiDepartement = await fetch("https://dev.next.core.yatouze.com/api/yatouze/departments?size=10",
    {headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0NzY2MDg4OCwiZXhwIjoxNzQ4MDkyODg4fQ._VQ13I_GkX-K5Q32j8q5xOMcs0O-aMp79BP9MWczI_4"
    }}
    )
    const a = apiDepartement.json()
    return(
      <Suspense fallback={<div>Loading...</div>}>
        <Departement  post={a}/> 
      </Suspense>
    )
}*/