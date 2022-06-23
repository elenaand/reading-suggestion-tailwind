import { startTransition } from "react";
import { useAtom } from "jotai";
import { readingSuggestionsAtom, readingSuggestionsListAtom } from "../atoms";

const EditSuggestionPage = () => {
  const [suggestions, setSuggestions] = useAtom(readingSuggestionsAtom);
  const [readingSuggestionsList] = useAtom(readingSuggestionsListAtom)


  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    startTransition(() => {
      setSuggestions(event.target.value);
    });
  };

  return (
    <>
      {console.log("readingSuggestionsList", readingSuggestionsList)}
      {console.log("suggestions", suggestions)}
      <h1>Lesemål</h1>
      <p>Her kan du skrive ned dine lesemål, for at det skal virke ordentlig må du separere de med komma.</p>
      
      <ul>
          {readingSuggestionsList?.map((item) => (
            <li>{item}</li>
          ))}
      </ul>

      <textarea
        name="reading-prompts"
        autoFocus={true}
        rows={15}
        cols={33}
        onChange={onChange}
        value={suggestions}
      />
    </>
  );
};

export default EditSuggestionPage;
