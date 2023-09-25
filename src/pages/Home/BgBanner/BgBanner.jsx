import React from 'react';
import heroBG from "../../../assets/images/heroBG.png";

export default function BgBanner() {
     return (
          <div
               style={{
                    backgroundImage: `url(${heroBG})`
               }}
               className={"w-full h-[500px] absolute top-0 -z-50 opacity-20 blur-none bg-top"}
          >
               {/* <img src={heroBG} alt="hell world" /> */}
          </div>
     )
}
