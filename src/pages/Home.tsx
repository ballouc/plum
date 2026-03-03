import { Link } from "react-router";
import plumLogo from "../assets/plum_logo.png";
import LavaBackground from "../components/LavaBackground";

export default function Home() {
  return (
    <LavaBackground className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="relative z-10 flex flex-col items-center gap-4 px-4 text-center">
        <img
          src={plumLogo}
          className="h-48 md:h-80 p-6 transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#c242bfaa]"
          alt="Plum Logo"
        />
        <h1 className="text-2xl md:text-3xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          Lorem Ipsum manufacturing.
        </h1>
        <Link
          to="/contact"
          className="mt-2 px-8 py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm md:text-base font-medium hover:bg-white/20 transition-all shadow-lg"
        >
          Get an estimate.
        </Link>
      </div>
    </LavaBackground>
  );
}
