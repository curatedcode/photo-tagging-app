import { create } from "zustand"


interface GameState {
  gameStatus: string,
  setGameStatus: (status: string) => void
}

export const useGameStatus = create<GameState>((set) => ({
  gameStatus: 'start-menu',
  setGameStatus: (status:string) => set((state) => ({ gameStatus: state.gameStatus = status}))
}))


interface GameTime {
  gameTime: string,
  setGameTime: (time: string) => void
}

export const useGameTime = create<GameTime>((set) => ({
  gameTime: '00:00:00',
  setGameTime: (time) => set((state) => ({ gameTime: state.gameTime = time}))
}))


interface GameCharacters {
  charactersLeft: Array<string | null>,
  setCharactersLeft: (left: Array<string | null>) => void
}

export const useGameCharactersLeft = create<GameCharacters>((set) => ({
  charactersLeft: ['Master Chief', 'Marcus', 'Niko'],
  setCharactersLeft: (left) => set((state) => ({ charactersLeft: state.charactersLeft = left}))
}))


interface GameCharacterLastFound {
  characterLastFound: string,
  setCharacterLastFound: (found: string) => void
}

export const useGameCharacterLastFound = create<GameCharacterLastFound>((set) => ({
  characterLastFound: '',
  setCharacterLastFound: (found) => set((state) => ({ characterLastFound: state.characterLastFound = found}))
}))