import React from 'react'
import { useState } from 'react';
import QRCode from 'react-qr-code'
export default function QRCodeGenerator() {
    const [qrCode,setQrCode] = useState('');
    const [input,setInput] = useState('');
    function handleGenrateQrCode(){
        setQrCode(input);
        setInput('');
    }
  return (
    <div>
        <h1>
            QR Code Generator
        </h1>
        <div>
            <input type='text' onChange={(e)=> setInput(e.target.value)} placeholder='Enter Your Value Here' name='qr-code' value={input}/>
            <button disabled={input && input.trim()!=='' ? false:true} onClick={handleGenrateQrCode}>Generate</button>
        </div>
        <div>
            <QRCode id='qr-code-value' value={qrCode} size={400}/>
        </div>
    </div>
  )
}
