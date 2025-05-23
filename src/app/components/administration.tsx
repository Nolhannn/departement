export default function NavAdministration({etatAd}:{etatAd :boolean}){
  
  if(etatAd===true){
    return <>
                <img src="/symbole-administration.svg" alt="administration logo" width="20" height="20" />
                <p>Administration</p>
            
          </>
  }else{
    return <>
                <img src="/symbole-administration-actif.svg" alt="administration logo" width="20" height="20" />
                <p className="text-blue-500">Administration</p>
          
          </>
  }
  
  
}