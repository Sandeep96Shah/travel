import React from 'react'

const HeadLineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white flex justify-center items-center'>
                <p className='font-bold text-2xl px-2 pt-4 text-orange-500'>Summer Chill</p>
            </div>
            <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/4997831/pexels-photo-4997831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white flex justify-center items-center'>
                <p className='font-bold text-2xl px-2 pt-4 text-orange-500'>Monsoon love</p>
            </div>
            <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/17212299/pexels-photo-17212299/free-photo-of-wood-landscape-water-boat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex justify-center items-center'>
                <p className='font-bold text-2xl px-2 pt-4 text-orange-500'>Winter</p>
            </div>
            <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/1004682/pexels-photo-1004682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
    </div>
  )
}

export default HeadLineCards