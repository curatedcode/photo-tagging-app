import { useGameStatus } from "@/useGameStore";
import EndModal from "./components/EndModal";
import StartModal from "./components/StartModal";
import Start from "./Start";

export default function Home() {
  const gameStatus = useGameStatus((state) => state.gameStatus);
  return (
    <div className="text-gray-300">
      {gameStatus === "start-menu" ? <StartModal /> : ""}
      {gameStatus === "end-menu" ? <EndModal /> : ""}
      {gameStatus === "playing" ? <Start /> : ""}
    </div>
  )
}
