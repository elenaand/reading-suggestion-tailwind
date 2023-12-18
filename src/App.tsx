import { Link, Route, Routes } from "react-router-dom";
import EditSuggestionsPage from "./pages/EditSuggestionsPage";
import SuggestionPage from "./pages/SuggestionPage";

function App() {
  return (
    <div>
      <div className="flex items-center justify-center mb-10">
        <Link className="font-semibold uppercase text-sm py-3 pr-2 pl-4 bg-beige rounded-bl-2xl hover:bg-opacity-75" to="reading-suggestion-tailwind/">Ditt lesemål</Link>
        <Link className="font-semibold uppercase text-sm py-3 pl-2 pr-4 bg-beige rounded-br-2xl hover:bg-opacity-75" to="reading-suggestion-tailwind/reading-suggestions">Rediger lesemål</Link>
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
