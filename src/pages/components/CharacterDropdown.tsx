/* eslint-disable @next/next/no-img-element */

interface Props {
  showDropdown: boolean;
  characterName: string;
  guessMissed: boolean;
}

export default function CharacterDropdown({
  showDropdown,
  characterName,
  guessMissed,
}: Props): JSX.Element {
  return (
    <div
      className={`${
        showDropdown ? "top-10" : "-top-10"
      } shadow-md shadow-gray-900 transition-all duration-1000 rounded-b-md flex items-center py-1 px-2 select-none bg-black fixed z-0 left-1/2 -translate-x-1/2`}
    >
      <img className="w-8" src={`/${characterName}.png`} alt=""></img>
      {guessMissed ? (
        <span>That&apos;s not {characterName}. Try Again!</span>
      ) : (
        <span>You Found {characterName}!</span>
      )}
    </div>
  );
}
