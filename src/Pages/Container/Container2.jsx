import { NavLink } from "react-router-dom";

export default function Container2() {
  return (
    <div className=" flex md:flex-row flex-col items-center gap-10 border">
      <div className=" flex items-center justify-center md:w-[50%]">
        <img
          className=" md:h-[800px]"
          src="images/photo-1544005313-94ddf0286df2.avif"
        />
      </div>
      <div className=" flex flex-col items-center justify-center gap-10 md:w-[50%]">
        <h1 className=" font-Heading font-bold text-[30px]">I'm Sara Khan</h1>
        <p className=" font-Heading font-semibold tracking-widest">
          THE PERSON BEHIND THE LENS
        </p>
        <p className=" font-Quotes text-[17px] text-center">
          Destination wedding and elopement photographer and videographer in
          Tamil-Nadu, India.
        </p>
        <p className="text-[17px] font-Paragraph leading-loose text-center">
          I'm your friend as well as your photographer. Nothing matters more to
          me than collaborating with you to arrange an effortless, stress-free
          wedding or elopement that fulfills your soul.
        </p>
        <NavLink to="/about" className=" font-serif underline">
          More about me
        </NavLink>
      </div>
    </div>
  );
}
