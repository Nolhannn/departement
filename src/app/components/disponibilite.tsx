export default function NavDisponibilite({etatDp}:{etatDp :boolean}){
  
  if(etatDp===true){
    return <>
                <img src="/symbole-disponibilite.svg" alt="disponibilite logo" width="20" height="20" />
                <p>Disponiblité</p>
            
          </>
  }else{
    return <>
                <img src="/symbole-disponibilite-actif.svg" alt="disponibilite logo" width="20" height="20" />
                <p className="text-blue-500">Disponibilité</p>
          
          </>
  }
  
  
}