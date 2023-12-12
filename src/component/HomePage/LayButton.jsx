/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React, { useState } from 'react'

// const LayButton = ({onCopy,onUnCopy}) => {

//     const[sub,setSub] = useState(false)

//     const handleClick = (e) => {
//         e.stopPropagation()
//         if(sub){
//             onCopy()
//         }else{
//             onUnCopy()
//         }
//         setSub(!sub)
//     }

//     return (
//         <button onClick={handleClick} className=" w-full p-1 rounded-md bg-given text-white">  {sub?"Copied":"Copy"}</button>
//     )
// }

// export default LayButton 

import React , {useState} from "react";

const LayButton= ({onCopy,onUnCopy}) =>{

const [click,setClick] = useState(false);
 
const handleCopy = (e) =>
{
    e.stopPropagation()
    setClick(!click)
   if(!click) 
   {
    onCopy()
   }
   else
   {
    onUnCopy()
   }
}

return (
    <button className="w-full p-1 rounded-md bg-given text-white focus:bg-slate-200" onClick={handleCopy}> {click? "Copied":"Copy"}</button>
)
}

export default LayButton 