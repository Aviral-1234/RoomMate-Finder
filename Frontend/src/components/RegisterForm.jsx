import { useState } from "react"
import React from 'react'
import { Link } from 'react-router-dom'


const RegisterForm = () => {

    const [fullname,setFullname] = useState(null);
    const [username,setUsername] = useState(null);
    const [email,setEmail] = useState(null);
    const [phoneNo,setPhoneNo] = useState(null);
    const [dob,setDob] = useState(null);
    const [image,setimage] = useState(null)
    const [gender,setGender]= useState(null)
    const [bio,setBio] = useState(null);
    const [city,setCity] = useState(null);
    const [state,setState] = useState(null);
    const [pincode,setPincode] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirm,setConfirm] = useState(null);
    const [match,setMatch] = useState(true);

    const handleImageChange = (event)=>{
        const file = event.target.files[0];
        if(file){
            setimage(URL.createObjectURL(file));
        }
    }

    const handleConfirm = (e) => {
        const value = e.target.value;
        setConfirm(value);
    
        // Compare directly using the event target value
        if (value === password) {
            setMatch(false); // Fix: should be `false` when it does not match
        } else {
            setMatch(true);
        }
    };
    

  return (
    <div className='w-full flex justify-center mt-24'>
        <div className='bg-zinc-900 w-1/2 px-5 py-10 rounded-lg'>
        <h1 className="bg-zinc-900 text-5xl mb-10">Register</h1>
        {/* <hr className="mb-10"/> */}
            <form className='bg-zinc-900' action="">
                <h2 className='text-2xl font-bold bg-zinc-900'>Basic Details</h2>
                <hr className='mt-2' />
                <div className='basicDetails'>
                    <div className='mt-5 bg-zinc-900'>
                        <h3 className='bg-zinc-900 text-lg'>Full Name</h3>
                        <input value={fullname} onChange={(e)=>{setFullname(e.target.value)}} className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" placeholder='Full Name' name='fullName' type="text"  />
                        <h3 className='bg-zinc-900 text-lg mt-3'>User Name</h3>
                        <input value={username} onChange={(e)=>{setUsername(e.target.value)}} className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" placeholder='User Name' type="text"/>
                        <h3 className='bg-zinc-900 text-lg mt-3'>Email</h3>
                        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" placeholder='Enter your Email' type="email"/>
                        <h3 className='bg-zinc-900 text-lg mt-3'>Phone Number</h3>
                        <input value={phoneNo} onChange={(e)=>{setPhoneNo(e.target.value)}} className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" placeholder='Number' type="number"/>
                        <h3 className='bg-zinc-900 text-lg mt-3'>Date of Birth</h3>
                        <input value={dob} onChange={(e)=>{setDob(e.target.value)}} className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" placeholder='Enter your DOB' type="date"/>
                    </div>
                </div>
                <h2 className='text-2xl font-bold bg-zinc-900 mt-5'>Profile Information</h2>
                <hr className='mt-2' />

                <div className='ProfileInfo bg-zinc-900'>
                    <h3 className='bg-zinc-900 text-lg mt-3'>Upload Your Image</h3>

                    <div className="flex justify-center mt-2">
                    {image ? (
                        <img src={image} className="flex justify-center w-2/3 h-full object-cover"/>
                    ) : (
                        <p className="text-gray-500 text-sm text-center mt-2">No Image</p>
                    )}
                    </div>
                    
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="mt-2 text-white bg-zinc-900 file:bg-zinc-700 file:text-white file:border-none file:px-4 file:py-2 file:rounded-md file:cursor-pointer"
                     />
                    <hr className="mt-2 mb-3"/>
                     <div className="radioClass bg-zinc-900 gap-4">
                     <h3 className='bg-zinc-900 text-lg mt-3'>Select Your Gender - </h3>
                        <div className="flex gap-4 bg-zinc-900 mt-1">
                        <label className="bg-zinc-900 flex items-center gap-2">
                        <input className="bg-zinc-900" type="radio" name="gender" value="male" checked={gender === "male"} onChange={(e)=>{setGender(e.target.value)}} />
                            <span className="bg-zinc-900"> Male </span>
                        </label>
                        <label className="flex items-center gap-2 bg-zinc-900">
                        <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={(e)=>{setGender(e.target.value)}} />
                            <span className="bg-zinc-900"> Female</span>
                        </label>
                        </div>
                     </div>
                     <h3 className='bg-zinc-900 text-lg mt-3'>Add your Bio</h3>
                     <textarea value={bio} onChange={(e)=>{setBio(e.target.value)}} className="mt-2 w-full h-[300px] bg-transparent border border-white rounded-md p-2" placeholder="add your bio here" name="" id=""></textarea>
                     {/* <hr className='mt-2' /> */}
                     </div>
                    <div className="LocationDetails bg-zinc-900">
                    <h2 className='text-2xl font-bold bg-zinc-900 mt-3'>Location Details</h2>
                    <hr className='mt-2' />
                    <h3 className='bg-zinc-900 text-lg mt-3'>Enter Your City</h3>
                    <input value={city} onChange={(e)=>{setCity(e.target.value)}} className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" placeholder='Enter Your city ' name='fullName' type="text"/>                     
                    
                    <h3 className='bg-zinc-900 text-lg mt-3'>Choose Your State</h3>                    
                    <select value={state} onChange={(e)=>{setState(e.target.value)}} className="w-full p-2 border rounded-md mt-2 bg-zinc-900
                     mb-3">
  <option value="">Select State</option>
  <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Punjab">Punjab</option>
  <option value="Rajasthan">Rajasthan</option>
  <option value="Sikkim">Sikkim</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Telangana">Telangana</option>
  <option value="Tripura">Tripura</option>
  <option value="Uttar Pradesh">Uttar Pradesh</option>
  <option value="Uttarakhand">Uttarakhand</option>
  <option value="West Bengal">West Bengal</option>
  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
  <option value="Chandigarh">Chandigarh</option>
  <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
  <option value="Lakshadweep">Lakshadweep</option>
  <option value="Delhi">Delhi</option>
  <option value="Puducherry">Puducherry</option>
  <option value="Ladakh">Ladakh</option>
  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
</select>

                        <h3 className='bg-zinc-900 text-lg mt-3'>Enter Your Pincode</h3>
                        <input value={pincode} onChange={(e)=>{setPincode(e.target.value)}} className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" placeholder='Pincode' type="number"/>                    
                    </div>
                    <h2 className='text-2xl mt-3 font-bold bg-zinc-900'>Set up Password</h2>
                    <hr className='mt-2' />
                    <div className="password bg-zinc-900">
                    <h3 className='bg-zinc-900 text-lg mt-3'>Enter your password</h3>
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" placeholder='Enter password' type="password"/> 
                    <h3 className='bg-zinc-900 text-lg mt-3'>Confirm your password</h3>
                    <input value={confirm} onChange={handleConfirm} className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" placeholder='Confirm password' type="password"/> 
                    {password != null ? (
                    (match) ? (
                        <h3 className="bg-zinc-900 text-red-500">Password does not match</h3>
                    ) : (
                        <h3 className="bg-zinc-900 text-green-500">Password matched</h3>
                    )                        
                    ) : (
                        <div></div>
                    ) }
                    </div>
                    <div className="w-full flex justify-center bg-zinc-900">
                    <input type="submit" value="Create Profile" className="bg-white text-black font-bold mt-5 px-10 py-3 rounded-md transition-tramsform hover:bg-transparent hover:text-white duration-300 hover:shadow-xl hover:scale-105 hover:border cursor-pointer" />
                    </div>
            </form>
            <h3 className='bg-zinc-900 mt-2 text-lg'>if you already have an account, <Link to={'/login'}> <span className='bg-zinc-900 text-blue-500 cursor-pointer hover:underline text-lg'>Login</span></Link></h3>
        </div>
    </div>
  )
}

export default RegisterForm
