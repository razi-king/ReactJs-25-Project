import React from 'react'
import MenuItem from './MenuItem';
let c = 1;
export default function MenuList({list=[]}) {
  return (
    <ul>
        {
            list && list.length ? 
            list.map(listItem=> <MenuItem key={c++} item={listItem}/>):null
        }
    </ul>
  )
}
