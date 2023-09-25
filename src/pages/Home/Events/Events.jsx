import React from 'react';
import { useForm } from 'react-hook-form';

export default function Events() {
     const { register, handleSubmit, reset } = useForm();

     const onSubmit = (data) => {
          console.log(data);

          //input field clear
          reset();
     }

     return (
          <section className="mt-10 flex flex-col gap-y-6 items-center justify-center z-50">
               <h1 className="text-4xl uppercase font-semibold text-black">I grow by helping people in need.</h1>
               <form onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-row items-center justify-center'
               >
                    <input type="text"
                         className="w-96 h-11 rounded-s-lg border border-[#D6D6D6] bg-[#FBFBFB] px-4 focus:outline-none font-medium"
                         placeholder='Search...'
                         {...register("searchInput")}
                    />
                    <button type="submit"
                         className='h-11 w-28 bg-primary rounded-e-lg text-white font-medium tracking-wider'
                    >Search</button>
               </form>
          </section>
     )
}
