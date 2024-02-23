import Container10 from "./Container/Container10";
import Container5 from "./Container/Container5";
import Container6 from "./Container/Container6";
import Container7 from "./Container/Container7";
import Container8 from "./Container/Container8";

export default function About() {
  return (
    <div className=" flex flex-col gap-10">
      <Container5 />
      <Container7 />
      <Container8 />
      <Container6 />
      <Container10 />
    </div>
  );
}
