import React, {useState } from 'react'

export default function Atm() {
    const [amount,setAmount] = useState(0);
    const [notes,setNotes] = useState({"2000":0,"500":0,"200":0,"100":0});
    const [showNotes,setShowNotes] = useState(false);
    const newNotes={"2000":0,"500":0,"200":0,"100":0};
    const calculateNotes = (e)=>{
        e.preventDefault();
        if(amount%100===0){
            let remaning = amount;
            if(remaning%2000>=0){
                newNotes["2000"]=Math.floor(remaning/2000);
                remaning=((remaning%2000));
            }
            if(remaning%500>=0){
                newNotes["500"]=Math.floor(remaning/500);
                remaning=((remaning%500));
            }
            if(remaning%200>=0){
                newNotes["200"]=Math.floor(remaning/200);
                remaning=((remaning%200));
            }
            if(remaning%100>=0){
                newNotes["100"]=Math.floor(remaning/100);
                remaning=((remaning%100));
            }
            alert("Transaction SuccessFul");
            setNotes(newNotes);
            setShowNotes(true);
        }
        else{
            alert("Invalid Amount");
            return '';
        }

    };
  return (
    <div>
        <form onSubmit={calculateNotes} className='d-flex flex-column container gap-3 m-3'>
            <label className='p'>Amount</label>
            <input className='' type='number' value={amount} onChange={(e)=> setAmount(e.target.value)}/>
            <button className='' type='submit'>WithDraw</button>
        </form>
        {showNotes && (
        <div>
          <h3>Note Breakdown:</h3>
          <ul>
            <li>₹2000 Notes: {notes["2000"]}</li>
            <li>₹500 Notes: {notes["500"]}</li>
            <li>₹200 Notes: {notes["200"]}</li>
            <li>₹100 Notes: {notes["100"]}</li>
          </ul>
        </div>
      )}
    </div>
  )
}
