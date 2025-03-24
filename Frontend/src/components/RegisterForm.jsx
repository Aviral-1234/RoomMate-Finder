import React from 'react'

const RegisterForm = () => {
  return (
    <div className='w-full flex justify-center mt-10'>
        <div className='bg-zinc-900 w-1/2  px-5 py-10'>
            <form className='bg-zinc-900' action="">
                <h2 className='text-2xl font-bold bg-zinc-900'>Basic Details</h2>
                <hr className='mt-2' />
                <div className=''>
                    <div className='mt-5 bg-zinc-900'>
                        <h3 className='bg-zinc-900 text-lg'>Full Name</h3>
                        <input className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" placeholder='Full Name' name='fullName' type="text"  />
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default RegisterForm
