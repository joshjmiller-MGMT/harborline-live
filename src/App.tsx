import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Ensembles from "./pages/Ensembles";
import EnsemblePage from "./pages/EnsemblePage";
import Occasions from "./pages/Occasions";
import OccasionPage from "./pages/OccasionPage";
import Locations from "./pages/Locations";
import LocationPage from "./pages/LocationPage";
import Songs from "./pages/Songs";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ensembles" element={<Ensembles />} />
          <Route path="/ensembles/:slug" element={<EnsemblePage />} />
          <Route path="/occasions" element={<Occasions />} />
          <Route path="/occasions/:slug" element={<OccasionPage />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:slug" element={<LocationPage />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
