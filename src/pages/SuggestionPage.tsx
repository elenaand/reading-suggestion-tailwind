import { useAtom } from "jotai";
import { useState } from "react";
import { readingSuggestionsListAtom } from "../atoms";

const EditSuggestionPage = () => {
  const [readingSuggestionsList] = useAtom(readingSuggestionsListAtom);
  const getRandomReadingSuggestion = () => {
    const size = readingSuggestionsList.length;
    const randomNumber = Math.floor(Math.random() * size);
    return readingSuggestionsList[randomNumber];
  };

  const [currentSuggestion, setCurrentSuggestion] = useState<string>(getRandomReadingSuggestion());

  return (
    <>
      <h1>Lesemål</h1>
      <button onClick={() => setCurrentSuggestion(getRandomReadingSuggestion())}>Nytt mål</button>
      <p>{currentSuggestion}</p>
    </>
  );
};

export default EditSuggestionPage;
