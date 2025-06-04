export default function WindowPays(
  props:{
    liste : any
  }
){
  console.log(props.liste)
  return(
    <div className="text-black right-0 top-1/5 mr-5 fixed border p-5 flex flex-col items-center bg-white shadow-md shadow-gray-500 border-gray-500  opacity-100 ">
      <p>{props.liste.properties.name}</p>
      <p>Nombre d'utilisteur : {props.liste.users}</p>
    </div>
  )
}