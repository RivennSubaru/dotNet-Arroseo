import React from 'react'
import { Outlet } from 'react-router'

const layout = () => {
  return (
    <div className='layout'>
        <header style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '1rem 2rem', background: 'rgba(255,255,255,0.7)', borderRadius: '0 0 1rem 1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
            <img src="/favicon.ico" alt="Arroseo logo" style={{height: '2.5rem', marginRight: '1rem'}} />
            <span style={{fontSize: '2rem', fontWeight: 'bold', letterSpacing: '0.1em', color: '#2e7d32'}}>Arroseo</span>
        </header>
        <Outlet/>
    </div>
  )
}

export default layout