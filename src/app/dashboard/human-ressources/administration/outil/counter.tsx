export default async function Rep(
  idProfil:{
    idProfil:number
  }
  

){
  const apiDepartement = await fetch(`https://dev.next.core.yatouze.com/api/yatouze/departments?size=20'`,
    {headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE2OCwiZW1haWwiOiJnZXJyeS5nb3ViYWxhbkB5YXRvdXplLmNvbSIsImlhdCI6MTc0NzY2MDg4OCwiZXhwIjoxNzQ4MDkyODg4fQ._VQ13I_GkX-K5Q32j8q5xOMcs0O-aMp79BP9MWczI_4"
    }}
    )
    const response = await apiDepartement.json()
   function findLength(id:number){
    let count =0
    let numb =response.data.map((x:any)=>{
                
                  return(            
                  
                  x.profile.map((y:any)=>{
                  if(id===x.id){
                    count+=y.users.length
                  return count}
                }
                ))}
                )
    return count
   }
    //x=>{if(x.id==idProfil.idProfil){return x.name} } 
  
  return(
    <> 
      
      {findLength(idProfil.idProfil)}
      
    
    </>
                
  )
}