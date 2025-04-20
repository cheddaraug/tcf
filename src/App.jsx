import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Process from "./pages/Process";
import NotFound from "./pages/NotFound";
import Legal from "./pages/Legal";
import ScrollToTop from "./components/ScrollTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="process" element={<Process />} />
          <Route path="contact" element={<Contact />} />
          <Route path="legal" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
