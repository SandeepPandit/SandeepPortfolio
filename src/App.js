import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { About } from "./components/About";

function App() {
  return (
    <>
      <div className="App">
        <div className="backgroundforall">
          <NavBar />
          <Home />
          <About />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
