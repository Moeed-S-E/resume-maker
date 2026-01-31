import { Routes, Route } from "react-router-dom";
import Window from "./Components/Window";
import FinalResume from "./Components/FinalResume";
import Footer from "./Components/Footer";
import "./App.css";
export default function App() {
  return (
    <>
      <h1 className="bg-white/80 backdrop-blur-md w-full p-6 shadow-md text-3xl font-extrabold text-center print:hidden">
        <span
          className="overflow-hidden relative bg-clip-text bg-linear-30 from-indigo-500 via-blue-800 to-indigo-900 text-transparent"
          style={{ WebkitBackgroundClip: "text" }}
        >
          Resume Maker
          <i className="absolute w-50 h-0.5 left-2 bottom-0 bg-indigo-500 zero-to-hero"></i>
        </span>
      </h1>

      <Routes>
        <Route path="/" element={<Window />} />
        <Route path="/resume" element={<FinalResume />} />
      </Routes>
      <Footer />
    </>
  );
}
