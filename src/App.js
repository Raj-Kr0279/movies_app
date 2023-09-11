import { React } from "react";
import { Routes, Route} from "react-router-dom";
import Television from "./Television";
import Movies from "./Movies";
import Footer from "./Footer";
import "./App.scss";

function App() {
  return (
  <>
      <Routes>
        <Route path="https://Raj-Kr0279.github.io/movies_app" element={<Movies />} />
        <Route path="/Television" element={<Television />} />
      </Routes>
        <Footer/>
        </>
  );
}

export default App;
