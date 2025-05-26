import List from "../api/departement"

export default async function Profil(){
  
  const apiProfil = await fetch("https://dev.next.core.yatouze.com/api/yatouze/profiles?size=20"
      ,{headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODE2NDEzNCwiZXhwIjoxNzQ4NTk2MTM0fQ.Ipi0GxLPi-uWBx2QAvZe8HQjou6wNj3rwXscolpv1hA" 
    }}
      )
      const response = await apiProfil.json()
      
    let isAdding=true 
   let count = 0
    return (
      <>
        <div className=" bg-white mt-10 min-h-100"> 
        <div className="flex relative">
          <List/>
        </div>
        <div className=" p-5 w-full">
            {
          response.data.map((x:any)=>{return( 
            <div className="flex">
                <p className="text-black p-5 w-full">{x.name}</p>
                <p className=" text-black p-5 w-full">
                {x.department.name}
                </p>
                </div>)}
              
        )}
         </div>
        {
        isAdding==true?"dd":""
        }
              </div>
      </>
      
  
    )
}