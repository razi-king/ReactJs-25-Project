import React, { useEffect, useState } from 'react'

export default function LoadMoreButton() {
    const [loading,setLoading] = useState(false);
    const [products,setProducts]= useState([]);
    const [count,setCount] = useState(0);

    async function fetchProduct(){
        try{
            const response = await fetch(`https://dummy.json.com/products?limit=20&${count===0 ? 0:count*20}`);
            const result = await response.json();
        }catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        fetchProduct()
    },[])
  return (
    <div>
        <div>
            <h1 className='text-3xl font-bold '>Load More Button</h1>

        </div>
    </div>
  )
}
