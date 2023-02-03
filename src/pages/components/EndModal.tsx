import { useGameTime } from "@/useGameStore";

export default function EndModal() {
  const gameTime = useGameTime((state) => state.gameTime);

  return (
    <div className="fixed bg-modals-image top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat flex flex-col place-items-center justify-center py-8">
      <span className="place-self-center text-3xl mb-4 bg-modal-green rounded-lg px-4 py-1">
        Your Score - <span className="font-bold">{gameTime}</span>
      </span>
      <button
        className="font-bold text-center bg-modal-light-green rounded-full px-14 py-2 text-2xl hover:bg-opacity-90 transition-opacity my-4"
        type="button"
        aria-label="play again"
        onClick={() => window.location.reload()}
      >
        Play Again
      </button>
    </div>
  );
}
