/* eslint-disable @next/next/no-img-element */
import {
  useGameCharacterLastFound,
  useGameStatus,
  useGameCharactersLeft,
} from "@/useGameStore";
import React, { useState, useRef, useEffect } from "react";
import CharacterCard from "./components/CharacterCard";
import CharacterDropdown from "./components/CharacterDropdown";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import Footer from "./components/Footer";

export default function Start(): JSX.Element {
  const [targetLocation, setTargetLocation] = useState({ x: 0, y: 0 });
  const [showTargetBox, setShowTargetBox] = useState(false);
  const targetRef = useRef(null);

  const lastFoundCharacter = useGameCharacterLastFound(
    (state) => state.characterLastFound
  );
  const [showCharacterDropdown, setShowCharacterDropdown] = useState(false);
  const [totalGuessesTaken, setTotalGuessesTaken] = useState(0)

  const charactersLeft = useGameCharactersLeft((state) => state.charactersLeft);
  const setCharactersLeft = useGameCharactersLeft(
    (state) => state.setCharactersLeft
  );
  const setCharacterLastFound = useGameCharacterLastFound(
    (state) => state.setCharacterLastFound
  );
  const setGameStatus = useGameStatus((state) => state.setGameStatus);

  const [lastGuessMissed, setLastGuessMissed] = useState(false);

  const characters = ["Master Chief", "Marcus", "Niko"];
  interface CheckTarget {
    character: string;
    location: { x: number; y: number };
  }

  async function checkTargetLocation(toCheck: CheckTarget): Promise<boolean> {
    const docRef = doc(db, "character-locations", toCheck.character);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    let isCharacterFound = false;
    Object.entries(data?.locations).forEach((location) => {
      const key = location[0];
      const value: any = location[1];
      if (value.X === toCheck.location.x && value.Y === toCheck.location.y) {
        isCharacterFound = true;
      }
    });
    return isCharacterFound;
  }

  async function sendTargetLocation(
    targetCharacter: string,
    targetBox: React.MutableRefObject<any>
  ): Promise<void> {
    const location = targetBox.current.getBoundingClientRect();
    const x = Math.floor(
      (window.document.body.offsetWidth - (location.left + window.scrollX)) /
        100
    );
    const y = Math.floor(
      (window.document.body.offsetHeight - (location.top + window.scrollY)) /
        100
    );
    console.log(x, y);

    const didFindCharacter = await checkTargetLocation({
      character: targetCharacter,
      location: { x: x, y: y },
    });
    if (didFindCharacter) {
      let newCharactersLeft: Array<string | null> = [];
      charactersLeft.forEach((character) => {
        if (character !== targetCharacter) newCharactersLeft.push(character);
      });
      setLastGuessMissed(false);
      if (newCharactersLeft.length < 1) setGameStatus("end-menu");
      else {
        setCharacterLastFound(targetCharacter);
        setCharactersLeft(newCharactersLeft);
      }
    } else {
      setCharacterLastFound(targetCharacter);
      setLastGuessMissed(true);
      setTotalGuessesTaken(totalGuessesTaken+1)
    }
  }

  useEffect(() => {
    if (lastFoundCharacter !== "") {
      setShowCharacterDropdown(true);
      setTimeout(() => setShowCharacterDropdown(false), 2000);
    }
  }, [lastFoundCharacter, lastGuessMissed, totalGuessesTaken]);

  return (
    <div className="w-full h-full text-gray-300">
      <CharacterDropdown
        showDropdown={showCharacterDropdown}
        characterName={lastFoundCharacter}
        guessMissed={lastGuessMissed}
      />
      <img
        className="w-full"
        src="/xbox-wimmel.png"
        alt="Wimmelbilder art"
        onClick={(e) => {
          setTargetLocation({ x: e.pageX, y: e.pageY });
          setShowTargetBox(true);
        }}
      ></img>
      {showTargetBox ? (
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 flex"
          style={{
            left: `${targetLocation.x}px`,
            top: `${targetLocation.y}px`,
          }}
        >
          <div
            className="border-black bg-gray-400 bg-opacity-60 border-2 rounded-full shadow-md opacity-60 border-dashed shadow-black fill-black h-24 w-24"
            ref={targetRef}
          ></div>

          <ul className="bg-gray-500 rounded-lg bg-opacity-80 font-bold absolute top-24 mt-2 -ml-6 w-max">
            {characters.map((character) => (
              <CharacterCard
                key={character}
                characterName={character}
                characterFound={
                  charactersLeft.includes(character) ? false : true
                }
                onClick={() => {
                  sendTargetLocation(character, targetRef);
                  setShowTargetBox(false);
                }}
              />
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
}
