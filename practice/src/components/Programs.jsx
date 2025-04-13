import React from 'react'

export default function Programs() {
  return (
    <div className='flex gap-5'>
      {/* First Blue Box (Parent) */}
      <div className='bg-blue-400 h-40 w-40 relative group'>
        {/* Green Box (Child) inside Blue Box */}
        <div className='flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 w-20 bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          {/* Red Box (Grandchild) inside Green Box */}
          <div className='flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            {/* Yellow Box (Great Grandchild) inside Red Box */}
            <div className='flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-5 w-5 bg-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            </div>
          </div>
        </div>
      </div>

      {/* Second Blue Box (Parent) */}
      <div className='bg-blue-400 h-40 w-40 relative group'>
        {/* Green Box (Child) inside Blue Box */}
        <div className='flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 w-20 bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          {/* Red Box (Grandchild) inside Green Box */}
          <div className='flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            {/* Yellow Box (Great Grandchild) inside Red Box */}
            <div className='flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-5 w-5 bg-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            </div>
          </div>
        </div>
      </div>

      {/* Third Blue Box (Parent) */}
      <div className='bg-blue-400 h-40 w-40 relative group'>
        {/* Green Box (Child) inside Blue Box */}
        <div className='flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 w-20 bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          {/* Red Box (Grandchild) inside Green Box */}
          <div className='flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            {/* Yellow Box (Great Grandchild) inside Red Box */}
            <div className='flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-5 w-5 bg-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
