import React from 'react'
import UseLocalStorage from './UseLocalStorage'

export default function LightDarkMode() {
    const [theme,setTheme]=UseLocalStorage('theme','black');
    function handleToggleTheme(){
        setTheme(theme==='black' ? "white":'black'
        );
        console.log(theme);
        
    }
  return (
    <div className={`min-h-screen text-center m-auto pt-[50%] ${theme==='black' ? 'bg-black text-white' :'bg-white text-black' }`}>
        <div>
            <h1 className='font-bold text-2xl'>Hello World</h1>
            <button onClick={handleToggleTheme} className='font-bold text-xl border-2 hover:bg-blue-400'>Change Theme</button>
        </div>
    </div>
  )
}
