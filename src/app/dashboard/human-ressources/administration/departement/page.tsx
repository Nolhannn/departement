import List from '../api/departement'
import BoutonDep from '../outil/boutonDep'
import Rep from '../outil/counter'
import Navigation from '../outil/navigation'
import   {DepApi} from '../api/dep'
import { depNav } from '../api/depNav'
export  default function Departement(
){
  
  return (
    <>
      <div className=" bg-white mt-10 min-h-100"> 
      <div className="flex relative">
        <BoutonDep/>
      </div>  
      <div className=" p-5 w-full">
        {<DepApi/>}           
       </div>
      <div className="text-black justify-center items-center gap-5 flex">

        {  depNav >10  ?
            <Navigation rigth={""} left={""}/>:"" }
          
      </div>
     </div>
    </>
    

  )
}