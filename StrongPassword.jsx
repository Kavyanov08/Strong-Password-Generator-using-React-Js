import React, { useState } from 'react'

export const StrongPassword = () => {
    const[length,setLength]=useState(8)
    const[includeuppercase,setIncludeuppercase]=useState(true)
    const[includelowercase,setIncludelowercase]=useState(true)
    const[includenumbers,setIncludenumbers]=useState(true)
    const[includesymbol,setIncludesymbol]=useState(true)
    const[password,setPassword]=useState('')

    const generatePassword=()=>{
        let charset=''
        if(includeuppercase)charset+='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if(includelowercase)charset+='abcdefghijklmnopqrstuvwxyz'
        if(includenumbers)charset+='0123456789'
        if(includesymbol)charset+='!@#$%^&*()_+-='
        let generatedpassword=''
        for(let i=0;i<length;i++){
            const randomIndex=Math.floor(Math.random()*charset.length)
            generatedpassword+=charset[randomIndex]
        }
        setPassword(generatedpassword)
    }

    const copyToclipboard=()=>{
        navigator.clipboard.writeText(password)
        alert('Password Copied')
    }
    
  return (
    <>
    <div className="password-generator">
        <h2>Strong Password Generator</h2>
        <div className="input-group">
            <label htmlFor="num">Password Length:</label>
            <input type="number" id='num' value={length} onChange={(e)=>setLength(parseInt(e.target.value))}/>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id='upper' checked={includeuppercase} 
            onChange={(e)=>setIncludeuppercase(e.target.checked)}/>
            <label htmlFor="upper">Include Uppercase</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id='lower' checked={includelowercase}
            onChange={(e)=>setIncludelowercase(e.target.checked)}/>
            <label htmlFor="lower">Include Lowercase</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id='numbers' checked={includenumbers}
            onChange={(e)=>setIncludenumbers(e.target.checked)} />
            <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id='symbol' checked={includesymbol}
            onChange={(e)=>setIncludesymbol(e.target.checked)}/>
            <label htmlFor="symbol">Include Symbol</label>
        </div>
        <button className='generate-btn' onClick={generatePassword}>Generate Password</button>
        <div className="generate-password">
            <input type="text" readOnly value={password}/>
            <button className='copy-btn' onClick={copyToclipboard}>Copy</button>
        </div>
    </div>
    </>
  )
}
