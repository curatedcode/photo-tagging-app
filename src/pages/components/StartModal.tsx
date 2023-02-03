/* eslint-disable @next/next/no-img-element */
import { useGameStatus } from "@/useGameStore";
import { useState } from "react";
import { MdClose } from "react-icons/md";

export default function StartModal() {
  const setGameStatus = useGameStatus((state) => state.setGameStatus);
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div className="fixed bg-modals-image top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat flex flex-col place-items-center justify-center py-8">
      <div className="aspect-video flex justify-center w-32">
        <img src="/Master Chief.png" alt="Master Chief character"></img>
        <img src="/Marcus.png" alt="Marcus character"></img>
        <img src="/Niko.png" alt="Niko character"></img>
      </div>
      <button
        className="font-bold text-center bg-modal-light-green rounded-full px-14 py-2 text-2xl hover:bg-opacity-90 transition-opacity my-4"
        type="button"
        aria-label="start"
        onClick={() => setGameStatus("playing")}
      >
        Start
      </button>
      <button
        className="font-bold text-center bg-modal-light-green rounded-full px-6 py-2 text-lg hover:bg-opacity-90"
        type="button"
        aria-label="start"
        onClick={() => setShowInstructions(!showInstructions)}
      >
        How to play
      </button>
      <div
        className={`${
          showInstructions ? "" : "invisible"
        } w-10/12 md:w-fit relative bg-modal-green rounded-lg py-4 px-8 text-lg my-8 text-center`}
      >
        <span>
          Find the three characters hiding in the crowd. Look carefully and
          investigate every corner. Good luck!
        </span>
        <MdClose
          className="absolute right-2 top-2 text-xl hover:cursor-pointer hover:fill-gray-400 tap"
          onClick={() => setShowInstructions(!showInstructions)}
        />
      </div>
    </div>
  );
}
