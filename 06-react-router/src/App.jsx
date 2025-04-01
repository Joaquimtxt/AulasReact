import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Sobre from "./Pages/Sobre/Sobre";
import Contato from "./Pages/Contato/Contato";
import Error from "./Pages/Error/Error";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        {/* Header */}
        <Header />

        {/* Conteúdo principal */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;