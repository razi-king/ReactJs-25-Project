import React, { useEffect, useState } from 'react'
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'

export default function Slider({url,page,limit}) {
    const [images,setImages]=useState([]);
    const [currentSlide,setCurrentSlide] =useState(0);
    const [errorMsg,setErrorMsg] = useState(null);
    const [loading,setLoading] = useState(false);
    async function fetchImages(getUrl){
        try{
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();
            if(data){
                setImages(data);
                setLoading(false);
            }
        }catch(e){
            setErrorMsg(e.message);
            setLoading(false);
        }
    }
    useEffect(()=>{
        if(url!=="" )fetchImages(url);
    },[url])
    console.log(images);
    if(loading){
        return <div>Loading Data ! Please Wait</div>
    }
    if(errorMsg!==null){
        return <div>
                    ErrorOccured ! {errorMsg}
                </div>
    }
    function handlePrevious(){
        setCurrentSlide(currentSlide===0 ? images.length-1:currentSlide-1);
    }
    function handleNext(){
        setCurrentSlide(currentSlide===images.length-1 ? 0:currentSlide+1);
    }
    return (
    <div className='relative flex justify-center items-center w-[600px] h-[450px]'>
        <BsArrowLeftCircleFill className='absolute w-8 h-8 text-white drop-shadow-[0px_0px_5px_#555] left-4' onClick={handlePrevious}/>
        {
            images && images.length ? images.map((imageItem,index)=>(
                <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={currentSlide===index ? 'rounded-lg shadow-[0px_0px_7px_#666666] w-[100%] h-[100%]':`hidden`}
                />
            )) :null
        }
        <BsArrowRightCircleFill className='absolute w-8 h-8 text-white drop-shadow-[0px_0px_5px_#555] right-4' onClick={handleNext}/>
        <span className='flex absolute bottom-4'>

            {
                images && images.length ? images.map((_,index)=><button className={currentSlide===index ? 'bg-white h-4 w-4 rounded-[50%] m-1 cursor-not-allowed':'bg-gray-300 h-4 w-4 rounded-lg m-1 cursor-pointer'}  key={index} onClick={()=>setCurrentSlide(index)}>
                    
                </button>) :null
            }
        </span>
    </div> 
  )
}
