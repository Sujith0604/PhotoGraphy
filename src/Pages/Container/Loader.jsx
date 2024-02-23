import { BounceLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className=" h-screen w-screen flex items-center justify-center">
      <BounceLoader color="#000000" />
    </div>
  );
}
