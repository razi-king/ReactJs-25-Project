import React from 'react'
import MenuList from './MenuList'
export default function TreeView({menus=[]}) {
  return (
    <div className='bg-blue-400 w-80 h-screen text-white text-center pl-10 pt-10 p-8'>
        <MenuList list={menus}/>
    </div>
  )
}