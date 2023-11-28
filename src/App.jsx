import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import ResetTautan from "./pages/ResetTautan";
import Reset from "./pages/Reset";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/ResetTautan" element={<ResetTautan />}></Route>
          <Route path="/Reset" element={<Reset />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
