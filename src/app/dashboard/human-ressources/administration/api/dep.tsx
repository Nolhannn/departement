import Rep from "../outil/counter"
import Navigation from "../outil/navigation"

export const DepApi=async()=>{
  const apiDepartement = await fetch("https://dev.next.core.yatouze.com/api/yatouze/departments?size=10",
    {headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODE2NDEzNCwiZXhwIjoxNzQ4NTk2MTM0fQ.Ipi0GxLPi-uWBx2QAvZe8HQjou6wNj3rwXscolpv1hA"
    }}
    )
    const response = await apiDepartement.json()
    return (
      <>
      {response.data.map((x:any)=>{return( 
                <div className="flex">
                    <p className="text-black p-5 w-full">{x.name}</p>
                    <p className=" text-black p-5 w-full">
                      <Rep idProfil={x.id}></Rep>
                    </p>
                    </div>
                    )}
                  
            )}
       
      </>
    )
}