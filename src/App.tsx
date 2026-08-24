import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Characters from "./pages/Characteres";
import CharacterDetails from "./pages/CharacterDetails";
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route
          path="/characters/:slug"
          element={<CharacterDetails />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
