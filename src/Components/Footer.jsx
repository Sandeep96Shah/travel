import React from 'react';
import scuba from '../assets/scuba.mp4';

const Footer = () => {
  return (
    <div className='max-w-[1640px] mx-auto h-[300px] px-4 mb-4'>
        <video className='h-full w-full object-cover' src={scuba} autoPlay loop muted></video>
    </div>
  )
}

export default Footer