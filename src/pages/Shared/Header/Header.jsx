import React from 'react';
import logo from "../../../assets/logos/Group 1329.png";
import { NavLink } from 'react-router-dom';

export default function Header() {
     return (
          <header className="w-full h-24 flex flex-row items-center justify-between px-24">
               <img src={logo} alt="logo"
                    className="h-12"
               />
               <nav className="font-Roboto tracking-wider flex flex-row gap-x-2 items-center font-medium">
                    <ul className="flex flex-row gap-x-6 mr-6">
                         <li><NavLink>Home</NavLink></li>
                         <li><NavLink>Donation</NavLink></li>
                         <li><NavLink>Events</NavLink></li>
                         <li><NavLink>Blog</NavLink></li>
                    </ul>
                    <button type="button"
                         className="bg-primary w-28 h-10 rounded-md text-white tracking-wider"
                    >Register</button>
                    <button type="button"
                         className="bg-[#434141] w-28 h-10 rounded-md text-white tracking-wider"
                    >Admin</button>
               </nav>
          </header>
     )
}
