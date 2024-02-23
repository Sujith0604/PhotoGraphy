import React from "react";
import { NavLink } from "react-router-dom";

export default function Container3() {
  return (
    <div className=" flex md:flex-row flex-col items-center gap-10 border">
      <div className=" flex flex-col items-center justify-center gap-10 md:w-[50%]">
        <h1 className=" font-Heading font-bold text-[30px]">I'm John Snow</h1>
        <p className=" font-Heading font-semibold tracking-widest">
          THE PERSON BEHIND THE LENS
        </p>
        <p className=" font-Quotes text-[17px] text-center">
          Wild-Life and Nature photographer and videographer in Tamil-Nadu,
          India.
        </p>
        <p className="text-[17px] font-Paragraph leading-loose text-center">
          I'm not just your photographer - I'm your friend. Nothing is more
          important to me than taking photos of the wild life and documenting
          them. These photographs are really useful for many people to know
          about wild animals and their life.
        </p>
        <NavLink to="/about" className=" font-serif underline">
          More about me
        </NavLink>
      </div>
      <div className=" flex items-center justify-center md:w-[50%]">
        <img
          className=" md:h-[800px]"
          src="images/craig-mckay-jmURdhtm7Ng-unsplash.jpg"
        />
      </div>
    </div>
  );
}
