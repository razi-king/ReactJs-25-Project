import React, { useState } from 'react'
import data from './data'
export default function Accordin() {
    const [selected,setSelected] = useState(null);
    const [enableMutliSelection,setEnableMultiSelection] = useState(false);
    const [multiple,setMultiple] =useState([]);
    function handleSingleSelection(getCurrentId){
        setSelected(selected===getCurrentId ? null : getCurrentId);
    }
    function handleMultiSelection(getCurrentId){
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentid = cpyMultiple.indexOf(getCurrentId);
        if(findIndexOfCurrentid===-1){
            cpyMultiple.push(getCurrentId);
        }
        else{
            cpyMultiple.splice(findIndexOfCurrentid,1);
        }
        setMultiple(cpyMultiple);
    }
    function toggleMultipleSelection(){
        setMultiple([]);
        setSelected(null);
        setEnableMultiSelection(!enableMutliSelection);
    }
  return (
    <div className='flex justify-center items-center flex-col mb-3'>
        <button onClick={toggleMultipleSelection} className='px-5 py-2.5 font-bold text-xl mb-3 bg-[#614101] text-white '>{enableMutliSelection ? "Disable Multi Selection":"Enable Multi Selection"}</button>
        <div className='w-[500px] '>
            {
                data && data.length > 0 ? 
                data.map(dataItem => <div key={dataItem.id} className='border-2 px-5 py-3 bg-[#614101] text-white'>
                    <div className='font-semibold text-3xl flex justify-between items-center my-6 '>
                        <h3>{dataItem.title}</h3>
                        <span className='cursor-pointer' onClick={enableMutliSelection ? ()=>handleMultiSelection(dataItem.id):()=> handleSingleSelection(dataItem.id)}>{enableMutliSelection ? multiple.includes(dataItem.id) ? "-":"+":selected===dataItem.id ? "-":"+"}</span>    
                    </div>  
                    {
                        selected===dataItem.id || multiple.indexOf(dataItem.id)!==-1 ? <div className='font-normal text-xl'>{dataItem.content}</div>:null
                    }
                </div>)
                :<div>No Data Found!</div>
            }
        </div>


    </div>
  )
}
