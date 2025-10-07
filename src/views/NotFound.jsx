import React from 'react'
import { FcCancel } from "react-icons/fc";
export default function NotFound() {
    return (
        <>
            <div className='mt-30'>
                <h1 className='text-3xl text-center font-bold text-red-600'>
                    <FcCancel  className='mx-auto text-6xl'/>
                    Not Found
                    <br />
                    กรุณาลองใหม่
                    <br />
                    หรือตรวจสอบ URL
                    
                </h1>
            </div>
        </>
    )
}
