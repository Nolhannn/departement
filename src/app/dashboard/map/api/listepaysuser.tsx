"use client"

import { useState } from "react"
import { col } from "../../human-ressources/administration/api/collabNav"

export let listePaysUser=[]
col.data.map((x)=>{
  if(x.country!==null&& x.country!=="")
  listePaysUser.push(x.country)
})




