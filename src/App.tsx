import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import Locations from "./pages/Locations";
import LocationPage from "./pages/LocationPage";
import Songs from "./pages/Songs";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div style={{ padding: "2rem", maxWidth: 960, margin: "0 auto" }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1 style={{ margin: 0 }}>HARBORLINE</h1>
        <p style={{ opacity: 0.6, margin: "0.25rem 0 1rem" }}>
          Phase 1 scaffold — placeholder routing
        </p>
        <nav style={{ display: "flex", gap: "1rem", flexWrap: "wrap", fontSize: 14 }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/services/wedding-bands">Service detail (wedding-bands)</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/locations/baltimore">Location detail (baltimore)</Link>
          <Link to="/songs">Songs</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:slug" element={<LocationPage />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
