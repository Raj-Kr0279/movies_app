import { React } from "react";
import { Routes, Route} from "react-router-dom";
import Television from "./Television";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import "./App.scss";
import DataProvider from "./context/DataContext";
import ItemDetails from "./components/ItemDetails";

function App() {
  return (
  <>
        <DataProvider>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/Television" element={<Television />} />
        <Route path = "/details" element = {<ItemDetails/>} />
      </Routes>
        <Footer/>
        </DataProvider>
        </>
  );
}

export default App;
