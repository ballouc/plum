import plumLogo from "../assets/plum.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-4rem)] bg-linear-to-br from-plum-gradient-1 via-plum-gradient-2 to-plum-gradient-4 bg-size[400%_400%] animate-[gradient_5s_ease_infinite]">
      <img
        src={plumLogo}
        className="h-64 p-6 transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#c242bfaa]"
        alt="Plum Logo"
      />
      <h1 className="text-white text-3xl">Home-grown manufacturing.</h1>
      <button className=" text-white bg-gray-800 px-16 rounded-md">
        Learn about us
      </button>
    </div>
  );
}
