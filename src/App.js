import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage/homepage.component";

const HatsComp = () => {
  return (
    <>
      <h1> Hats Page</h1>
    </>
  );
};

const JacketsComp = (props) => {
  return (
    <>
      <h1> Jackets Page</h1>
    </>
  );
};

const SneakersComp = (props) => {
  return (
    <>
      <h1> Sneakers Page</h1>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/hats" element={<HatsComp />} />
        <Route path="/jackets" element={<JacketsComp />} />
        <Route path="/sneakers" element={<SneakersComp />} />
      </Routes>
    </Router>
  );
}

export default App;
