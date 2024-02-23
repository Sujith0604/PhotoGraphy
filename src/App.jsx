import { Route, Routes } from "react-router";
import { Suspense, lazy } from "react";
import Loader from "./Pages/Container/Loader";

const AppLayout = lazy(() => import("./AppLayout"));
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Work = lazy(() => import("./Pages/Works"));

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
