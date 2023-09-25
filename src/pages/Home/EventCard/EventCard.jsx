import React from 'react';

export default function EventCard({ event }) {
     console.log(event)
     const { title, image } = event;
     return (
          <div className='relative'>
               <div className="absolute bottom-0 w-full h-16 bg-primary text-white flex items-center justify-center rounded-b-[10px]">
                    <h3 className='text-xl font-medium'>{title}</h3>
               </div>
               <img src={image} alt="" />
          </div>
     )
}
