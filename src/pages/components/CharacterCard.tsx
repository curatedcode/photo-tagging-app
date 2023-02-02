/* eslint-disable @next/next/no-img-element */

import React from "react";

interface CharacterData {
  characterName: string;
  onClick: React.MouseEventHandler<HTMLLIElement>;
  characterFound: boolean;
}

export default function CharacterCard({
  characterName,
  onClick,
  characterFound,
}: CharacterData): JSX.Element {
  return (
    <li
      className={`${
        characterFound ? "hidden" : ""
      } flex items-center py-1 px-2 select-none hover:bg-gray-600 hover:bg-opacity-40 hover:cursor-pointer`}
      onClick={onClick}
    >
      <img
        className="w-8"
        src={`/${characterName}.png`}
        alt={`${characterName} character`}
      ></img>
      <span>{characterName}</span>
    </li>
  );
}
