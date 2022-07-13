import { useAtom } from "jotai";
import { useState } from "react";
import { IoReloadCircleSharp } from "react-icons/io5";
import { readingSuggestionsListAtom } from "../atoms";

const emojis = ["✨", "🌟", "⚡️", "🥳", "🌸", "📚", "🔥"]

const EditSuggestionPage = () => {
  const [readingSuggestionsList] = useAtom(readingSuggestionsListAtom);

  // TODO trigges 3 ganger fix this.
  const getRandomReadingSuggestion = (): string => {
    const size = readingSuggestionsList.length;
    const randomNumber = Math.floor(Math.random() * size);
    console.log('randomNumber', randomNumber);
    return readingSuggestionsList[randomNumber];
  };

  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  const [currentSuggestion, setCurrentSuggestion] = useState<string>(getRandomReadingSuggestion);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-darkerBlue pb-5">Ditt lesemål</h1>
      <p className="flex text-2xl bg-darkerBlue text-lighterBlue rounded-md p-5 mx-2"><span>{randomEmoji}</span> {currentSuggestion} <span>{randomEmoji}</span></p>
      <button
        className="flex button text-l items-center bg-lighterBlue text-darkerBlue rounded-full"
        onClick={() => setCurrentSuggestion(getRandomReadingSuggestion)}
      >
        <div className="text-xl pr-2"><IoReloadCircleSharp /></div>
        <p>Nytt mål</p>
      </button>
    </div>
  );
};

export default EditSuggestionPage;
