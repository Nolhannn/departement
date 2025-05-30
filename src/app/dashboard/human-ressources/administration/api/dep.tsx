import Rep from "../outil/counter"
import Navigation from "../outil/navigation"
import axios from 'axios';
export const DepApi=async()=>{
  const apiDepartement = await axios.get("https://dev.next.core.yatouze.com/api/yatouze/departments?size=10",
    {headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODU5NjQzNSwiZXhwIjoxNzQ5MDI4NDM1fQ.nMGU6qM-NRotV6m7hHdhzUjp7Git6zHPkOe8qzNfu5s"
    }}
    )
    const response = await apiDepartement
    return (
      <>
      {response.data.map((x:any)=>{return( 
                <div className="flex">
                    <p className="text-black p-5 w-full">{x.name}</p>
                    <p className=" text-black p-5 w-full">
                      <Rep nbpage={1} idProfil={x.id}></Rep>
                    </p>
                    </div>
                    )}
                  
            )}
       
      </>
    )
}