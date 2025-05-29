import React, { useState } from 'react'

export default function Bill() {
    const [bill,setBill] = useState(0);
    const [amount,setAmount] =useState(0);
    const [showAmount,setShowAmount] = useState(false);
    const calculateBill = (e)=>{
        e.preventDefault()
        let tempBill = bill;
        if(tempBill<=100){
            setAmount(0);
        }
        else if(tempBill<=200){
            setAmount((tempBill-100)*5);
        }
        else if(tempBill<=300){
            setAmount((tempBill-200)*9+500);
        }
        else{
            setAmount((tempBill-300)*12+1400);
        }
        setShowAmount(true);

    }
  return (
    <div className="container mt-5">
    <div className="card shadow">
        <div className="card-header bg-primary text-white">
            <h3 className="mb-0">Electricity Bill Calculator</h3>
        </div>
        <div className="card-body">
            <form onSubmit={calculateBill} className="needs-validation" noValidate>
                <div className="mb-3">
                    <label htmlFor="unitsInput" className="form-label fw-bold">Enter Number Of Units</label>
                    <input 
                        type="number" 
                        className="form-control form-control-lg" 
                        id="unitsInput"
                        value={bill} 
                        onChange={(e)=>setBill(e.target.value)}
                        required
                    />
                    <div className="invalid-feedback">
                        Please enter a valid number of units.
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100">Calculate Bill</button>
            </form>

            {showAmount && (
                <div className="mt-4 p-3 bg-light rounded">
                    <h4 className="text-center mb-3">Bill Details</h4>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="fw-bold">Units Consumed:</span>
                        <span>{bill}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="fw-bold">Total Amount:</span>
                        <span className="fs-5 text-success">₹{amount}</span>
                    </div>
                </div>
            )}
        </div>
    </div>
</div>
  )
}
