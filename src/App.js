import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Container from "./components/first/Container";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/test1" element={<Container></Container>}></Route>
        {/* <Route path="/test2" element={}></Route>
        <Route path="/test3" element={}></Route>
        <Route path="/test4" element={}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
