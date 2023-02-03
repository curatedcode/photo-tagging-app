import { useGameStatus } from "@/useGameStore";
import EndModal from "./components/EndModal";
import NavBar from "./components/NavBar";
import StartModal from "./components/StartModal";
import Start from "./Start";

export default function Home() {
  const gameStatus = useGameStatus((state) => state.gameStatus);
  return (
    <div className="text-gray-300">
      <NavBar />
      {gameStatus === "start-menu" ? <StartModal /> : ""}
      {gameStatus === "end-menu" ? <EndModal /> : ""}
      {gameStatus === "playing" ? <Start /> : ""}
    </div>
  )
}
