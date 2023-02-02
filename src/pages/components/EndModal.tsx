import { useGameStatus, useGameTime } from "@/useGameStore";

export default function EndModal() {
  const gameTime = useGameTime((state) => state.gameTime);

  return (
    <div className="fixed top-0 left-0 w-full bg-black h-full bg-opacity-80">
      <div className="bg-green-800 grid gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-11/12 py-4 pb-6">
        <span className="place-self-center text-3xl">
          Your Time: <span className="font-bold">{gameTime}</span>
        </span>
        <div className="place-self-center bg-black bg-opacity-60 text-center rounded-md">
          <h1 className="text-2xl py-2 border-b-2 border-black border-opacity-20">
            Leaderboard
          </h1>
          <ol className="overflow-y-scroll h-48 list-decimal pl-14 pr-8 py-2">
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
            <li>Raul - 1.23s</li>
          </ol>
        </div>
        <button
          className="font-bold place-self-center w-fit text-center bg-black rounded-full px-8 py-2 text-xl md:mt-8 md:px-12 md:text-2xl hover:bg-opacity-80"
          type="button"
          onClick={() => window.location.reload()}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
