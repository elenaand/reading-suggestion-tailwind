import { startTransition, useState } from "react";
import { useAtom } from "jotai";
import { TbEdit } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { readingSuggestionsAtom, readingSuggestionsListAtom } from "../atoms";

const EditSuggestionPage = () => {
  const [suggestions, setSuggestions] = useAtom(readingSuggestionsAtom);
  const [readingSuggestionsList] = useAtom(readingSuggestionsListAtom)
  const [isEditing, setIsEditing] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    startTransition(() => {
      setSuggestions(event.target.value);
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-darkerBlue pb-5">Rediger lesemål</h1>
      <p className="bg-lighterBlue rounded-md p-5 mx-2 text-left text-l">Her kan du skrive ned dine lesemål så trekkes ett tilfeldig for deg! <br/> <h2 className="font-bold py-2">Hvordan funker det:</h2> 
        <ol className="list-decimal pl-5">
          <li>Trykk på "Rediger lesemål"-knappen</li>
          <li>Legg til dine lesemål i listen</li>
          <li>Separere målene med komma ","</li> 
          <li>Klikk tilbake til "Tilfeldig lesemål" for å få et tilfeldig mål fra listen din.</li>
        </ol>
      </p>


      <button
        className="flex button text-l items-center bg-lighterBlue text-darkerBlue rounded-full"
        onClick={() => setIsEditing(!isEditing)}>
        {!isEditing ? <><span className="text-xl pr-2"><TbEdit /></span><p>Rediger lesemål</p></> : <><span className="text-xl pr-2"><FaEye /></span><p>Se lesemål</p></>}
      </button>

      {!isEditing ? 
        <ul className="list-disc text-left text-l pl-5">
          {readingSuggestionsList?.map((item) => (
            <li>{item}</li>
          ))}
        </ul> :
        <textarea
          name="reading-prompts"
          rows={15}
          cols={33}
          onChange={onChange}
          value={suggestions}
        />
      }
    </div>
  );
};

export default EditSuggestionPage;
