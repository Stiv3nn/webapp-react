// IMPORTO LE PAGE CHE UTILIZZIAMO
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

// IMPORTIAMO LAYOUT
import DefaultLayout from "./layouts/DefaultLayout";

// IMPORTIAMO LA PARTE DI GESTIONE ROTTE DA MODULO REACT-ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          {/* SONO LE NOSTRE 2 ROTTE PRINCIPALI PER LA NAVIGAZIONE DEI FILM */}
          <Route index path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
