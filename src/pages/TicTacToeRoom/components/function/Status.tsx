import React from 'react'

export default function Status({message}:any) {
    return (
        <div className='status'>
            <h1 className="status-message">{message}</h1>
        </div>
    )
}