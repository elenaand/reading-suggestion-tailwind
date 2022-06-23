import { Link, Route, Routes } from "react-router-dom";
import EditSuggestionsPage from "./pages/EditSuggestionsPage";
import SuggestionPage from "./pages/SuggestionPage";

function App() {
  return (
    <div>
      <header>
        <Link to="/">Get reading suggestion</Link>
        <Link to="/reading-suggestions">Edit possible suggestions</Link>
      </header>
      <Routes>
        <Route
          path="/reading-suggestions"
          element={<EditSuggestionsPage />}
        />
        <Route
          path="/"
          element={<SuggestionPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
