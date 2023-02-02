/* eslint-disable @next/next/no-img-element */
import { useGameStatus } from "@/useGameStore";

export default function StartModal() {
  const setGameStatus = useGameStatus((state) => state.setGameStatus);

  return (
    <div className="fixed top-0 left-0 w-full bg-black h-full bg-opacity-80">
      <div className="bg-green-800 grid gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg pt-4 pb-12 px-8 w-11/12 md:grid-cols-2 md:gap-0 md:gap-x-8">
        <div className="aspect-video flex justify-center">
          <img src="/Master Chief.png" alt="Master Chief character"></img>
          <img src="/Marcus.png" alt="Marcus character"></img>
          <img src="/Niko.png" alt="Niko character"></img>
        </div>
        <span className="md:text-2xl md:w-2/3 md:place-self-center">
          Find the three characters hiding in the crowd. Look carefully and
          investigate every corner.
        </span>
        <button
          className="font-bold place-self-center grid gap-8 w-fit text-center bg-black rounded-full px-8 py-2 text-xl md:col-span-full md:mt-8 md:px-12 md:text-2xl hover:bg-opacity-80"
          type="button"
          aria-label="start"
          onClick={() => setGameStatus("playing")}
        >
          Start
        </button>
      </div>
    </div>
  );
}
