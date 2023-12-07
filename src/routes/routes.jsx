import { Route, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "../../../final_project_Admin/src/routes/PrivateRoutes";
import ProtectedRoutes from "../../../final_project_Admin/src/routes/ProtectedRoutes";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import CourseTracking from "../pages/CourseTracking";
import CourseDetail from "../pages/CourseDetail";
import Payment from "../pages/Payment";
import PaymentSuccess from "../pages/PaymentSuccess";
import CourseDetailUnlock from "../pages/CourseDetailUnlock";
import Register from "../pages/Register";
import Reset from "../pages/Reset";
import Verifikasi from "../pages/Verifikasi";
import ResetTautan from "../pages/ResetTautan";
import Navbar from "../components/Navbar/Navbar";
import Notification from "../pages/Notification";
import Account from "../pages/Account";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<PrivateRoutes />}>
                <Route path="#">
                </Route>
            </Route>
            <Route element={<ProtectedRoutes />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/resetpassword" element={<Reset />} />
                <Route path="/verifikasi" element={<Verifikasi />} />
                <Route path="/resettautan" element={<ResetTautan />} />
            </Route>

            <Route path="/" element={<Navbar />}>
                <Route path="/home" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/detail" element={<CourseDetail />} />
                <Route path="/courseTrackings" element={<CourseTracking />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/payment/success" element={<PaymentSuccess />} />
                <Route path="/courses/detail/unlock" element={<CourseDetailUnlock />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/user" element={<Account />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

export default router;