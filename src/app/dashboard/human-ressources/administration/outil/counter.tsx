export default async function Rep(
  idProfil:{
    idProfil:number
  }
  

){
  const apiDepartement = await fetch(`https://dev.next.core.yatouze.com/api/yatouze/departments?size=10'`,
    {headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0ODE2NDEzNCwiZXhwIjoxNzQ4NTk2MTM0fQ.Ipi0GxLPi-uWBx2QAvZe8HQjou6wNj3rwXscolpv1hA"
    }}
    )
    const response = await apiDepartement.json()
   function findLength(){
    let count =0
    
    let numb = response.data.map((x:any)=>{
            if(idProfil.idProfil===x.id){
                  return(      
                   x.profile.map((y:any)=>count+=y.users.length)
                  )}})
       return count
          }  
  return(
    <> 
      
      {findLength()}
      
    
    </>
                
  )
}