import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BgImage from '../../public/bg.jpg'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
function Login() {
  return (
    <div 
    style={{
        backgroundImage: `url(${BgImage.src})`
    }} className='w-full h-screen
     flex items-center justify-center'>
        <div className='w-1/4 md:w-1/4 sm:w-1/2 h-2/4 relative sm'>

                <FeatherIcon icon='user' size={90}  className='absolute p-4 m-auto left-0 right-0 -top-1 rounded-full shadow-xl z-20'
                    style={{
                        backgroundColor:'#00213F',
                        color:'white'
                    }}
                />
                 <Link href="/about" style={{
                    bottom:'65px'
                 }} className='w-2/3 mt-5 absolute m-auto left-0 right-0 z-0'>
                        <div className='w-full h-15 p-5 text-white bg-darker rounded-xl flex items-center justify-center'>
                            Login
                        </div>
                    </Link>
                <div className='w-full h-2/3 mt-10 bg-white  rounded-xl shadow-xl flex items-center justify-center z-10 absolute' >
                <form className='flex flex-col w-3/4'>
                    <div className='flex flex-col w-full'>
                    <label>User Name</label>
                    <input className='bg-gray-100 shadow-inner rounded p-2 w-full' id='email' type='email' aria-label='email address' placeholder='Enter your username' />
                    </div>
                    <div className='flex flex-col w-full mt-5'>
                    <label>Password</label>
                    <input className='bg-gray-100 shadow-inner rounded p-2 w-full' id='email' type='email' aria-label='email address' placeholder='Enter your email address' />
                    </div>
                   
                </form>
                    
                </div>
            
       
        </div>
        
    </div>
  )
}

export default Login