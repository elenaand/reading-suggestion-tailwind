import { Link, Route, Routes } from "react-router-dom";
import EditSuggestionsPage from "./pages/EditSuggestionsPage";
import SuggestionPage from "./pages/SuggestionPage";

function App() {
  return (
    <div>
      <div className="m-3 mb-10">
        <Link className="font-bold uppercase text-sm py-4 pr-2 pl-4 bg-beige rounded-bl-3xl hover:bg-opacity-75" to="reading-suggestion-tailwind/">Tilfeldig lesemål</Link>
        <Link className="font-bold uppercase text-sm py-4 pl-2 pr-4 bg-beige rounded-br-3xl hover:bg-opacity-75" to="reading-suggestion-tailwind/reading-suggestions">Rediger lesemål</Link>
      </div>

      <Routes>
        <Route
          path="reading-suggestion-tailwind/reading-suggestions"
          element={<EditSuggestionsPage />}
        />
        <Route
          path={`reading-suggestion-tailwind/`}
          element={<SuggestionPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
