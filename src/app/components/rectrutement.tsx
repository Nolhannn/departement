export default function NavRectrutement({etatRc}:{etatRc :boolean}){
  
  if(etatRc===true){
    return <>
                <img src="/symbole-recrutement.svg" alt="Recrutement logo" width="20" height="20" />
                <p>Recrutement</p>
            
          </>
  }else{
    return <>
                <img src="/symbole-recrutement-actif.svg" alt="Recrutement logo" width="20" height="20" />
                <p className="text-(--currentColor)">Recrutement</p>
          
          </>
  }
  
  
}