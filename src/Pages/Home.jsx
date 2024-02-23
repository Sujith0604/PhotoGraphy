import Carousal from "./Container/Carousal";
import Container1 from "./Container/Container1";
import Container2 from "./Container/Container2";
import Container3 from "./Container/Container3";
import Container4 from "./Container/Container4";

export default function Home() {
  return (
    <div className=" flex flex-col gap-10">
      <Carousal />
      <Container1 />
      <Container2 />
      <Container4 />
      <Container3 />
    </div>
  );
}
