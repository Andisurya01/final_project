import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import ResetTautan from "./pages/ResetTautan";
import Reset from "./pages/Reset";
import Home from "../src/pages/Home";
import CourseTracking from "./pages/CourseTracking";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Verifikasi from "./pages/Verifikasi";
import CourseDetailUnlock from "./pages/CourseDetailUnlock";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import Notification from "./pages/Notification";
import Account from "./pages/Account";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/courseTrackings" element={<CourseTracking />}>
            {" "}
          </Route>
          <Route path="/courses" element={<Courses />}>
            {" "}
          </Route>
          <Route path="/courses/detail" element={<CourseDetail />}>
            {" "}
          </Route>
          <Route path='/courses/detail/unlock' element={<CourseDetailUnlock />}> </Route>
          <Route path='/payment' element={<Payment />}> </Route>
          <Route path='/payment/success' element={<PaymentSuccess />}> </Route>
          <Route path='/notification' element={<Notification />}> </Route>
          <Route path='/users' element={<Account />}> </Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/ResetTautan" element={<ResetTautan />}></Route>
          <Route path="/Reset/:resetToken" element={<Reset />}></Route>
          <Route path="/Verifikasi" element={<Verifikasi />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
