import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import alexPhoto from '../assets/download.jpg'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ListingView = () => {

    const roomImages = [
        'https://images.unsplash.com/photo-1615571022219-1254f8cd1e9c',
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
        'https://images.unsplash.com/photo-1616046229478-9901c5536a45',
        'https://images.unsplash.com/photo-1582719478250',
        'https://images.unsplash.com/photo-1556020685-ae341caa49d9'
      ]

  return (
    <div className='mt-32 w-full px-10'>
      <div className='top-section'>
        <div className='flex justify-center'>
            <div className='h-45 w-44 bg-transparent'>
                <img src={alexPhoto} alt="profile photo" className=' rounded-full'/>
            </div>
        </div>
        <div className='flex justify-center mt-3'>
            <h1 className='text-4xl'>Alexandria Daddario</h1>
        </div>        
        <div className='flex justify-center mt-2'>
            <h3 className='text-lg'>female · 26 years · Hollywood</h3>
        </div>
        <hr className='mt-5'/>
      </div>
      <div className='roomInfo-section '>
       {/* rent datetomove security deposit preffered gender address landmar description anemities photos */}
       {/* first section that includes rent availdate secdepo gen */}
        <div className='1st  mt-5 flex justify-center '>
            <div className='flex justify-center gap-10 w-auto p-7 bg-zinc-800 rounded-xl'>
            <h3 className='text-xl bg-transparent'>
                <span className='font-bold bg-transparent'>Rent :</span> 5000 <br />
                <span className='font-bold bg-transparent'>Security Deposit :</span> 15000 <br />
                <span className='font-bold bg-transparent'>Available from :</span> 12-12-2025 <br />
                <span className='font-bold bg-transparent'>Preffered Gender :</span> Female / Male if its Aviral <br />
            </h3>
            <h3 className='text-xl w-[400px] bg-transparent'>
                <span className='font-bold bg-transparent'>Address :</span> Top Moholla ujjain <br />
                <span className='font-bold bg-transparent'>Landmark :</span> near anda gully <br />
                <span className='font-bold bg-transparent'>Anemeties : </span>
                    Wi-Fi · 
                    Air Conditioning · 
                    Washing Machine · 
                    Parking · 
                    Security · 
                    Power Backup · 
                    Water Supply 24/7
            </h3>            
            <h3 className='text-xl w-[350px] bg-transparent'>
                <span className='font-bold bg-transparent'>Contact information</span> <br />
                <span className='font-bold bg-transparent'>Email :</span> alex@gmail.com<br />
                <span className='font-bold bg-transparent'>Phone No :</span> +91 213456789<br />
            
            </h3>
            </div>
        </div>
      </div>
      <hr className='mt-5'/>
        {/* description */}
    <div className='flex justify-center'>
      <div className='mt-5 px-10 mb-5'>            
            <h3 className='text-xl bg-transparent'>
                <span className='mb-5 font-bold text-2xl'>Description</span> <br className='mt-5'/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a convallis tellus. Maecenas sed mauris eu lorem efficitur tempus vitae blandit lectus. Etiam malesuada bibendum arcu non accumsan. Quisque euismod finibus porta. Aenean at velit eu arcu tincidunt feugiat. Fusce id dictum purus. Proin et nibh semper urna gravida fermentum.
            </h3>
      </div>
      </div>
      <hr className='mb-5' />
      {/* images Section */}
{/* Images Section with Slider */}
<div className='images-section mt-5'>
        <div className='flex justify-center mb-5'>
          <h2 className='text-2xl font-bold'>Property Images</h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ 
            delay: 3000,
            disableOnInteraction: false 
          }}
          className='max-w-4xl bg-transparent'
        >
          {roomImages.map((image, index) => (
            <SwiperSlide key={index} className='bg-transparent'>
              <div className='flex justify-center bg-transparent'>
                <img 
                  src={image} 
                  alt={`Room view ${index + 1}`} 
                  className='max-h-[500px] w-full object-cover rounded-xl bg-transparent'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ListingView
