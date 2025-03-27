import React, { useEffect, useState } from 'react'

export default function RandomColor() {
    const [typeOfColor,setTypeOfColor] = useState('Hex');
    const [color,setColor] = useState('#000000');
    function randomColorUtility(length){
        return Math.floor(Math.random() *length);
    }
    function handleCreateRandomHexColor(){
        const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor="#";
        for(let i = 0 ;i<6;i++){
            hexColor+=hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor);
        
    }
    function handleCreateRandomRgbColor(){
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
    }
    useEffect(()=> {
        if(typeOfColor=="Hex"){
            setColor(handleCreateRandomHexColor);
        }
        else{
            setColor(handleCreateRandomRgbColor);
        }
    },[typeOfColor])
  return (
    <div className='h-screen w-screen' style={{backgroundColor:color}}>
        <div className='flex justify-center gap-5 pt-5'>
        <button onClick={()=>setTypeOfColor('Hex')} className=' font-medium w-28 h-12 bg-white' >Hex Color</button>
        <button onClick={()=>setTypeOfColor('Rgb')} className=' font-medium w-28 h-12 bg-white' >Rgb Color</button>
        <button onClick={typeOfColor==='Hex'? handleCreateRandomHexColor:handleCreateRandomRgbColor} className=' font-medium w-28 h-12 bg-white' >Generate Random Color</button>
    
        </div>
        <div className='flex justify-center items-center flex-col mt-[50%]'>
            <h1 className='font-bold text-4xl'>{typeOfColor}</h1>
            <p className='font-normal text-xl'>{color}</p>
        </div>
    </div>
  )
}
