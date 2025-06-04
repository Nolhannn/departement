"use client"
import { useEffect, useState } from "react";
import Map from "./map/page";
import { keyGerry } from "@/app/components/key";

export default function GeneralMap(){
  const [color, setColor]=useState({})
 function setBg () {
    const randomColor =Math.floor(Math.random()*16777215).toString(16)//"hsl(" + Math.random() * 360 + ", 100%, 75%)"
    return "#" + randomColor //colorChoisi.x.color
}
useEffect(()=>{
async function fetchData(){
try{
   const apiCollaborateurs = await fetch("https://dev.next.core.yatouze.com/api/yatouze/users/all?",
          {headers:{
            Authorization: keyGerry
          }}
          )
          const response = await apiCollaborateurs.json()
  const apiPaysMaps = fetch("/features.json",{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
         }).then(function(response){
           
            return response.json();
          }).then(
            function(result) {
              setColor(x=>result.objects.world.geometries)
              
              
              setColor(x=>x.map(y=>{
                let user=0
                let rd ="#bfbfbf"
               response.data.map((d)=>{
                 
                if(d.country==y.properties.name){
                  rd=setBg()
                  user++}
               })
                
                return({...y,"color":rd,"users":user})}))
            }
          )
    }finally{}
}
fetchData()
},[])
  return(
    <Map pickedColor={color}/>
  )
}