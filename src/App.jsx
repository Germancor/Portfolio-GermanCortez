
import useStore from './store/useStore';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Proyects from "./pages/Projects";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Error from "./components/Error";
import { home, contact, aboutme, proyect, experience, error } from "./routes/paths";

function App() {

  const {tema} = useStore()
  return (
    <div className={tema === 'oscuro' ? 'dark-mode' : 'light-mode'}>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path={home} element={<Home />}></Route>
          <Route path={aboutme} element={<AboutMe />}></Route>
          <Route path={contact} element={<Contact />}></Route>
          <Route path={proyect} element={<Proyects />}></Route>
          <Route path={experience} element={<Error/>}></Route>
          <Route path={error} element={<Error />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
