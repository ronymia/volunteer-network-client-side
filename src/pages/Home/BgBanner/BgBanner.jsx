import React from 'react';
import heroBG from "../../../assets/images/heroBG.png";

export default function BgBanner() {
     return (
          <div
               style={{
                    backgroundImage: `url(${heroBG})`
               }}
               className={"w-full h-[500px] absolute top-0 z-0 opacity-10 blur-sm"}
          >
               {/* <img src={heroBG} alt="hell world" /> */}
          </div>
     )
}
