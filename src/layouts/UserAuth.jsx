import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import logo from "../assets/logos/Group 1329.png";

export default function UserAuth() {
     const navigate = useNavigate();

     return (
          <div className="flex flex-col items-center justify-center gap-y-5 pt-10 bg-[#F8FAFC]">
               <img src={logo} alt=""
                    className="h-16 cursor-pointer"
                    onClick={() => navigate("/")}
               />
               <Outlet />
          </div>
     )
}
