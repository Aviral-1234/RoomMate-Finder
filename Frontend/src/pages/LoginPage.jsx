import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [email,setEmail] = useState(null);
  const [password,setPassword] = useState(null);

return (
<div className='w-full flex justify-center mt-24'>
        <div className='bg-zinc-900 w-1/2 px-5 py-10 rounded-lg'>
        <h1 className="bg-zinc-900 text-5xl mb-10">Login</h1>
        {/* <hr className="mb-10"/> */}
            <form className='bg-zinc-900' action="">
                
                <div className='basicDetails'>
                    <div className='mt-5 bg-zinc-900'>
                        <h3 className='bg-zinc-900 text-lg mt-3'>Email</h3>
                        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" placeholder='Enter your Email' type="email"/>
                    </div>
                </div>
                    <div className="password bg-zinc-900">
                    <h3 className='bg-zinc-900 text-lg mt-3'>Enter your password</h3>
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" placeholder='Enter password' type="password"/> 
                    </div>
                    <div className="w-full flex justify-center bg-zinc-900">
                    <input type="submit" value="Login" className="bg-white text-black font-bold mt-10 px-10 py-3 rounded-md transition-tramsform hover:bg-transparent hover:text-white duration-300 hover:shadow-xl hover:scale-105 hover:border cursor-pointer" />
                    </div>
            </form>
            <h3 className='bg-zinc-900 mt-2 text-lg'>if you are new here then, <Link to={'/register'}> <span className='bg-zinc-900 text-blue-500 cursor-pointer hover:underline text-lg'>Register</span></Link></h3>
        </div>
    </div>
  )
}

export default Login
