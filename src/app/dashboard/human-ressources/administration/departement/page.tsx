import List from '../api/departement'
import BoutonDep from '../outil/boutonDep'
import Rep from '../outil/counter'
export  default async function Departement(
){
  
  const apiDepartement = await fetch("https://dev.next.core.yatouze.com/api/yatouze/departments?size=10",
    {headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODE2NDEzNCwiZXhwIjoxNzQ4NTk2MTM0fQ.Ipi0GxLPi-uWBx2QAvZe8HQjou6wNj3rwXscolpv1hA"
    }}
    )
    const response = await apiDepartement.json()
    
 let count = 0
 function pageGen(id:number){
  let elems =""
  for(let i=0;i<id;i=i+10){
    console.log(i)
    elems+=<button>{(i+10/10)}</button>
  }
  const { DOMParser } = require('xmldom');

  return(
   new DOMParser().parseFromString(elems, 'text/xml')
  )
 }
  return (
    <>
      <div className=" bg-white mt-10 min-h-100"> 
      <div className="flex relative">
        <BoutonDep/>
      </div>
      <div className=" p-5 w-full">
          {
        response.data.map((x:any)=>{return( 
          <div className="flex">
              <p className="text-black p-5 w-full">{x.name}</p>
              <p className=" text-black p-5 w-full">
                <Rep idProfil={x.id}></Rep>
              </p>
              </div>
              )}
            
      )}
      <div className="text-black justify-items-center">
           <p>Page :</p> 
           {response.meta.totalItems>10 ? (response.meta.totalItems)
           :"1/1"}
          </div>
       </div>
          
     </div>
    </>
    

  )
}