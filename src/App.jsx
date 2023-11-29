import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import ResetTautan from "./pages/ResetTautan";
import Reset from "./pages/Reset";
import Home from '../src/pages/Home'
import CourseTracking from './pages/CourseTracking'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/courseTrackings' element={<CourseTracking />}> </Route>
          <Route path='/courses' element={<Courses />}> </Route>
          <Route path='/courses/detail' element={<CourseDetail />}> </Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/ResetTautan" element={<ResetTautan />}></Route>
          <Route path="/Reset/:resetToken" element={<Reset />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
