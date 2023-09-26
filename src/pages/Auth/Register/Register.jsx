import React from 'react';
import { useForm } from "react-hook-form";

export default function Register() {
     const { register, handleSubmit, reset } = useForm();

     const onSubmit = (data) => {
          console.log(data);

          //clear form
          reset();
     }

     return (
          <div className="w-[570px] border border-[#ABABAB] rounded p-10 bg-white">
               <h1 className='text-2xl font-bold'>Register as a Volunteer</h1>
               <form onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-y-5 mt-6"
               >
                    <input type="text"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium capitalize'
                         placeholder='Full name'
                         {...register("fullName")}
                    />

                    <input type="email"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium capitalize'
                         placeholder='email'
                         {...register("email")}
                    />

                    <input type="date"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium capitalize'
                         {...register("date")}
                    />

                    <input type="text"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium capitalize'
                         placeholder='Desicription'
                         {...register("describe")}
                    />

                    <input type="text"
                         className='w-full h-11 border-b border-[#C5C5C5] px-2 focus:outline-none placeholder:text-sm font-medium capitalize'
                         placeholder='Organize books at the library'
                         readOnly
                         {...register("eventTask")}
                    />

                    <input type="submit" value={"Registration"}
                         className='w-full h-11 bg-primary text-lg text-white mt-2 font-semibold tracking-widest cursor-pointer'
                    />
               </form>
          </div>
     )
}
