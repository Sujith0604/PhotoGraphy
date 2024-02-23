import { NavLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import PinterestIcon from "@mui/icons-material/Pinterest";
import CallIcon from "@mui/icons-material/Call";

export default function Footer() {
  return (
    <div className=" flex flex-col ">
      <hr />
      <div className=" flex md:flex-row justify-between gap-10  p-4 flex-col  ">
        <div className=" flex flex-col gap-10 h-full w-full ">
          <h1 className=" font-Heading tracking-widest">THE PHOTOGRAPHY</h1>
          <p className=" font-Paragraph">
            BASED IN INDIA, TAMILNADU CAPTURING STORIES OF PEOPLE AND WORLDWIDE
          </p>
          <div className=" flex gap-5">
            <h1 className=" font-Paragraph font-bold">CONNECT</h1>
            <NavLink>
              <InstagramIcon />
            </NavLink>
            <NavLink>
              <FacebookIcon />
            </NavLink>
            <NavLink>
              <XIcon />
            </NavLink>
            <NavLink>
              <EmailIcon />
            </NavLink>
            <NavLink>
              <PinterestIcon />
            </NavLink>
            <NavLink>
              <CallIcon />
            </NavLink>
          </div>
        </div>
        <div className=" flex gap-10 items-center justify-center font-Paragraph font-semibold   ">
          <div className=" flex flex-col gap-5">
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/works">PHOTOS</NavLink>
            <NavLink>PORTFOLIO</NavLink>
          </div>
          <div className=" flex flex-col gap-5">
            <NavLink>AWARDS</NavLink>
            <NavLink to="/about">INFO</NavLink>
            <NavLink>CONTACT</NavLink>
          </div>
          <div></div>
        </div>
        <div className=" flex flex-col gap-10 items-center justify-center  h-full w-full">
          <div>
            <h1 className=" text-center font-Paragraph">
              HELLO@THEPHOTOGRAPH.COM TAMIL-NADU, INDIA
            </h1>
          </div>
          <button className=" bg-red-200 p-4 font-serif">CONTACT US</button>
        </div>
      </div>

      <div className=" flex items-center h-[100px] font-Paragraph text-white bg-black p-4">
        @2021 THE PHOTOGRAPHY | ALL RIGHTS RESERVED | POWERED BY ACCURATE | SK
      </div>
    </div>
  );
}
