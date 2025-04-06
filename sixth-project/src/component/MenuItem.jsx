import React, { useState } from 'react'
import MenuList from './MenuList'

export default function MenuItem({item}) {
    const [displayCurrentChildren,setDisplayCurrentChildren] = useState({});
    function handleChildrenToggle(getCurrentLabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel],
        })
    }
  return (
    <li className='p-4'>
        <span className='flex gap-5 font-bold items-center '>{item.label}
    {
        item && item.children && item.children.length ? <span onClick={()=>handleChildrenToggle(item.label)} className='cursor-pointer text-xl'>
        {
            displayCurrentChildren[item.label] ? "-":"+"
        }
        </span> :null
    }</span>
    {
        item && item.children && item.children.length >0 && displayCurrentChildren[item.label] ? 
        <MenuList list={item.children}/>
        :null
    }</li>
  )
}
