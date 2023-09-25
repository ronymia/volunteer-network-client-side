import React from 'react';
import { useForm } from 'react-hook-form';

//img import
import childSupport from '../../../assets/images/childSupport.png';
import refuseShelter from '../../../assets/images/refuseShelter.png';
import foodCharity from '../../../assets/images/foodCharity.png';
import clothSwap from '../../../assets/images/clothSwap.png';
import riverClean from '../../../assets/images/riverClean.png';
import cleanWater from '../../../assets/images/cleanWater.png';
import goodEducation from '../../../assets/images/goodEducation.png';
import newBooks from '../../../assets/images/newBooks.png';

import EventCard from '../EventCard/EventCard';

const events = [
     {
          id: 1,
          title: "Child Support",
          image: childSupport
     },
     {
          id: 2,
          title: "Refuge shelter",
          image: refuseShelter
     },
     {
          id: 3,
          title: "Food Charity",
          image: foodCharity
     },
     {
          id: 4,
          title: "Host a clothing swap.",
          image: clothSwap
     },
     {
          id: 5,
          title: "Host a river clean-up.",
          image: riverClean
     },
     {
          id: 6,
          title: "Clean water for children",
          image: cleanWater
     },
     {
          id: 7,
          title: "Good education",
          image: goodEducation
     },
     {
          id: 8,
          title: "New books for children",
          image: newBooks
     }
]

export default function Events() {
     const { register, handleSubmit, reset } = useForm();

     const onSubmit = (data) => {
          console.log(data);

          //input field clear
          reset();
     }

     return (
          <section className="mt-10 flex flex-col gap-y-6 items-center justify-center z-50 px-32">
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
               <article className='grid grid-cols-4 gap-5 mt-7'>
                    {
                         events.map(event =>
                              <EventCard key={event.id}
                                   event={event}
                              />
                         )
                    }
               </article>
          </section>
     )
}
