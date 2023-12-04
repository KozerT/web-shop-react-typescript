import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
