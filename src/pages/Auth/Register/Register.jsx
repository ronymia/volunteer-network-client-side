import React from 'react';

export default function Register() {
     return (
          <div className="w-[570px] border border-[#ABABAB] rounded p-10 bg-white">
               <h1 className='text-2xl font-bold'>Register as a Volunteer</h1>
               <form action=""
                    className="flex flex-col gap-y-5 mt-6"
               >
                    <input type="text"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium capitalize'
                         placeholder='Full name'
                    />
                    <input type="email"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium capitalize'
                         placeholder='email'
                    />
                    <input type="date"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium capitalize'
                    />
                    <input type="text"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium capitalize'
                         placeholder='Desicription'
                    />
                    <input type="text"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium capitalize'
                         placeholder='Organize books at the library.'
                    />
                    <input type="submit" value={"Registration"}
                         className='w-full h-11 bg-primary text-lg text-white mt-2 font-semibold tracking-widest'
                    />
               </form>
          </div>
     )
}
