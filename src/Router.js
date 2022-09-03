import { BrowserRouter, Routes, Route } from "react-router-dom";
import Savings from "./components/savings";
import Home from "./pages/home";
import LearnMore from "./pages/learn-more";

const Router =() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/page" element={<LearnMore/>}/>
        <Route path="/savings" element={<Savings/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
