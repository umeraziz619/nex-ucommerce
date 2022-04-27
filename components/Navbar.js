import React from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai';
const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 bg-slate-100 shadow-md'>
        <div className="logo mx-5">
            <Link href={'/'}><a><Image src="/logo.png" alt="" width={200} height={40} /></a></Link>
            
        </div>
        <div className="nav">
            <ul className='flex items-center space-x-2 font-bold'>
               <Link href="/tshirts"><a><li>T shirts</li></a></Link>
               <Link href="/hoodies"><a><li>Hoodies</li></a></Link>     
               <Link href="/mugs"><a><li>Mugs</li></a></Link>
               <Link href="/stickers"><a><li>Stickers</li></a></Link>
            </ul>
        </div>
        <div className="cart absolute right-0 top-4 mx-5 md:text-xl">
            <AiOutlineShoppingCart className='text-xl md:text-3xl'/>
        </div>
    </div>
  )
}

export default Navbar