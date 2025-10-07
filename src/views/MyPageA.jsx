import React from 'react'
import hello from '../assets/imgPA/hello.png'
import Pro from '../assets/imgPA/profile.png'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export default function MyPageA() {
  return (
    <>
    <div style={{fontFamily:"'Monomaniac One'"}} className='w-full h-lvh flex flex-col items-center bg-black'>
        {/* ส่วนที่ 1 menu */}
        <div className='w-8/12 mx-auto flex mt-15 items-center '>
            <div className='flex-1 flex gap-10 text-2x1'>
                <a href=""className='text-white'>Portfolio</a>
                <a href=""className='text-white'>About</a>
                <a href=""className='text-white'>Get In Touch</a>
            </div>
            <div className='flex-1 flex justify-center'>
                <img src={hello} alt="hello" />
            </div>
            <div className='flex-1 text-white gap-5 flex justify-end'>
                <FaGithub/>
                <FaInstagram/>
                <FaTwitter/>
                <FaLinkedinIn/>
            </div>
        </div>
        {/* ส่วนที่ 2 ข้อความ */}
        <div className='mt-30'>
            <h1 className='text-white text-3xl flex justify-center'>
                Somrak Sudyodjing
                <br />
            </h1>
            <h1 className='text-[#01D5A2] text-3xl'>
                Freelance Web Developer
            </h1>
            <h1 className='text-white text-3xl flex justify-center'>
                Based In THAILAND
            </h1>
        </div>
        {/* ส่วนที่ 3 รูป */}
        <div className='mt-15'>
            <img src={Pro} alt="proflie" className='border-[#01D5A2] border-2 rounded-full p-2 ' />
        </div>

    </div>
    </>
  )
}
