import React from 'react'
import { useState } from 'react';

import AmenitiesSelector from './AmenitiesSelector'

const ListForm = () => {

    
  const [address,setAddress] = useState(null);
  const [rent,setRent] = useState(null);
  const [deposit,setDeposit] = useState(null);
  const [availDate,setAvailDate] = useState(null);
  const [landmark, setLandmark] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [gender, setGender] = useState(null);
  const [selectedImages,setSelectedImages] = useState([])

  const handleImageUpload = (e)=>{
    const files = Array.from(e.target.files);
    setSelectedImages(files);
  }
  
  return (
<div className='w-full flex justify-center mt-24 mb-24'>
        <div className='bg-zinc-900 w-1/2 px-5 py-10 rounded-lg'>
        <h1 className="bg-zinc-900 text-4xl mb-10">Create Your Room Listing</h1>
        {/* <hr className="mb-10"/> */}
            <form className='bg-zinc-900' action="">
                
                    <div className='mt-5 bg-zinc-900'>
                        <h3 className='bg-zinc-900 text-lg mt-3'>Property Address</h3>
                        <input value={address} onChange={(e)=>{setAddress(e.target.value)}} className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" placeholder='eg. svvv, indore' type="text"/>
                    
                        <h3 className='bg-zinc-900 text-lg mt-3'>Monthly Rent</h3>
                        <input value={rent} onChange={(e)=>{setRent(e.target.value)}} className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" placeholder='enter amount in ₹' type="number"/> 

                        <h3 className='bg-zinc-900 text-lg mt-3'>Mention Security Deposit</h3>
                        <input value={deposit} onChange={(e)=>{setDeposit(e.target.value)}} className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" placeholder='enter amount in ₹' type="number"/> 

                        <h3 className='bg-zinc-900 text-lg mt-3'>Available from</h3>
                        <input value={availDate} onChange={(e)=>{setAvailDate(e.target.value)}} className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" type="date"/> 

                        <h3 className='bg-zinc-900 text-lg mt-3'>Add landmark</h3>
                        <input value={landmark} onChange={(e)=>{setLandmark(e.target.value)}} className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" placeholder='eg. sanidhya, shekhar stationary' type="text"/>

                        <h3 className='bg-zinc-900 text-lg mt-3'>Title</h3>
                        <input value={title} onChange={(e)=>{setTitle(e.target.value)}} className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" placeholder='enter your title' type="text"/> 

                        <h3 className='bg-zinc-900 text-lg mt-3'>Description</h3>
                        <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} className="mt-2 w-full h-[200px] bg-transparent border border-white rounded-md p-2" placeholder="add your description here" name="" id=""></textarea>

                        <h3 className='bg-zinc-900 text-lg mt-3'>Choose Preffered Gender</h3>
                        <select value={gender} onChange={(e)=>{setGender(e.target.value)}} className="w-full p-2 border rounded-md mt-2 bg-zinc-900 mb-3">
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Any">Any</option>
                        </select>

                        <AmenitiesSelector/>

                        <div className='imageUpload p-3 bg-transparent'>
                            <input
                             type="file"
                             accept="image/*" 
                             multiple
                             onChange={handleImageUpload} 
                             className='p-2 bg-transparent rounded-md' />
              
                        <div className="flex gap-2 flex-wrap">
                            {selectedImages.length > 0 &&
                             selectedImages.map((img, index) => (
                                  <img
                                   key={index}
                                    src={URL.createObjectURL(img)}
                                    alt={`Uploaded ${index + 1}`}
                                    className="w-24 h-24 object-cover rounded-md shadow-md"
                                />
                              ))}
                          </div>
                        </div>

                    </div>
                    <div className="w-full flex justify-center bg-zinc-900">
                        <input type="submit" value="Create Listing" className="bg-white text-black font-bold mt-10 px-10 py-3 rounded-md transition-tramsform hover:bg-transparent hover:text-white duration-300 hover:shadow-xl hover:scale-105 hover:border cursor-pointer" />
                    </div>
            </form>
        </div>
    </div>
  )
}

export default ListForm
