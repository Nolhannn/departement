"use client"
import React, { useEffect, useState } from "react";
import { listePaysUser } from "./api/listepaysuser";
 

import NavigationCollab from "../../human-ressources/administration/outil/navigationCollab";
import { collabNav } from "../../human-ressources/administration/api/collabNav";
import { ComposableMap, Geographies, Geography,ZoomableGroup } from "react-simple-maps"; 
import { keyGerry } from "@/app/components/key";

export default function Map(
  props :{
    pickedColor : any
  }
){
const [nb,setNb]=useState(1)
  const [collab,setCollab]=useState()
  const [loading,setLoading]=useState(true)
  const [color,setColor]=useState(props.pickedColor)
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  const[recherche,setRecherche]=useState("")
  const [counter,setCounter]=useState(nb*10+5)
  function handleZoomIn() {
    console.log("zoom")
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  useEffect(
    ()=>{
      async function fetchData(){
        try{
          let nbp = "&page="+nb
          let size = recherche==""?"size=15":"size="
           const apiCollaborateurs = await fetch("https://dev.next.core.yatouze.com/api/yatouze/users/all?"+size+nbp,
          {headers:{
            Authorization:keyGerry
          }}
          )
          const response = await apiCollaborateurs.json()
          setCollab(response)
          
           setColor(x=>{
            let h =props.pickedColor
            console.log(props.pickedColor)
            })
           
          setCounter(nb*10+5)
        
    
        }finally{
          setLoading(false)
          
        }
        
      }
      fetchData()
    },[nb,recherche]
  )
  let c=0
  function next(n:string){
    const limit = recherche==""?collabNav:c
      if(n==="next"){
      if(nb<Math.ceil(limit/15))
      setNb(x=>x=x+1)
    }else{
      if(nb>1)
      setNb(x=>x=x-1)
    }
    }
 
 function getColor(country:string){
    let c =""
    Array.from(props.pickedColor).map(x=>{
      
      if(country==x.properties.name){
       
        c = x.color}
    })
    return  c
 }
 function showWindow(x:any){
  const reh = x.properties.name
  setRecherche(x=>x=reh)
 }

   if(loading){return "loading..."}
  
return(
 <div className=" flex border shadow-md shadow-gray-500 h-min ">
  <div className="flex flex-col w-150">
    <div className="flex gap-2 border border-gray-400 bg-whte justify-between text-blue-500">
      <div className="flex-1">Pays</div>
      <div className="flex-1">Ville</div>
      <div className="flex-1">Navigateur</div>
      <div className="flex-1">Date</div>
    </div>
    {collab.data.map((x)=>{
      
      if(recherche==""){
        
      
          return(
        <div className="flex gap-2 pt-3 pl-2 pb-3 border border-gray-400 bg-whte justify-between text-black">
          <div className="flex-1">{x.country?x.country:"null"}</div>
          <div className="flex-1">{x.city?x.city:"null"}</div>
          <div className="flex-1">navigateur</div>
          <div className="flex-1">{
            (new Intl.DateTimeFormat('en-US', {year: '2-digit', month: '2-digit',day: '2-digit'}).format(new Date(x.createdAt)))
            +" À "+
            (new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute:'2-digit', hour12:false}).format(new Date(x.createdAt)).replace(":","h"))

            }</div>
        </div>
      )
      }else if(x.country==recherche){
        c++
        console.log(c)
        if(c>=counter-10&&c<counter)
        return(
        <div className="flex gap-2 pt-3 pl-2 pb-3 border border-gray-400 bg-whte justify-between text-black">
          <div className="flex-1">{x.country?x.country:"null"}</div>
          <div className="flex-1">{x.city?x.city:"null"}</div>
          <div className="flex-1">navigateur</div>
          <div className="flex-1">{
            (new Intl.DateTimeFormat('en-US', {year: '2-digit', month: '2-digit',day: '2-digit'}).format(new Date(x.createdAt)))
            +" À "+
            (new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute:'2-digit', hour12:false}).format(new Date(x.createdAt)).replace(":","h"))

            }</div>
        </div>
      )
      }

       
    })}
    <div className=" p-1 text-black flex justify-center ">
      <NavigationCollab  page={nb} nextPage={next}/>
    </div>
    
  </div>
  <div className="w-250 outline-none m-auto flex flex-col">
   <div className="flex justify-center">
     <button onClick={handleZoomIn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth="3"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <button onClick={()=>{setRecherche("")}} className="text-black border rounded p-1 shadow-md shadonw-gray-500">Reset</button>
        <button onClick={handleZoomOut}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth="3"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
    </div>
  <ComposableMap  projection="geoEqualEarth"
  projectionConfig={{
    scale: 150,
  }}
  ><ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
        
      >
    <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => {
            for(let i=0;i<listePaysUser.length;i++ ){
              
              if(geo.properties.name==listePaysUser[i])
                
              return<Geography onClick={()=>{showWindow(geo)}}
              style={{
            default: { outline: "none" },
            hover: { outline: "none" },
            pressed: { outline: "none",
                      stroke:"black"
            },
          }} key={geo.rsmKey} fill={getColor(geo.properties.name)} name={geo.id} geography={geo} />

            }
              
             return(
             <Geography onClick={()=>{showWindow(geo)}}
             style={{
            default: { outline: "none" },
            hover: { outline: "none" },
            pressed: { outline: "none",
                      stroke:"#FF5533" },
          }} key={geo.rsmKey} fill={getColor(geo.properties.name)} name={geo.id} geography={geo} />
          )
        }) 
        
        }
      </Geographies>
      </ZoomableGroup>
    </ComposableMap>
    </div>
  </div>

)
}
