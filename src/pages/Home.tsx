import plumLogo from "../assets/plum.png";
import LavaBackground from "../components/LavaBackground";

export default function Home() {
  return (
    <LavaBackground className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-4rem)]">
      <div className="relative z-10 flex flex-col items-center gap-4">
        <img
          src={plumLogo}
          className="h-64 p-6 transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#c242bfaa]"
          alt="Plum Logo"
        />
        <h1 className="text-white text-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          Home-grown manufacturing.
        </h1>
        <button className="mt-2 px-8 py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-all cursor-pointer shadow-lg">
          Learn about us
        </button>
      </div>
    </LavaBackground>
  );
}
