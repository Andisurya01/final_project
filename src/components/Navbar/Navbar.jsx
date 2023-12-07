import { Icon } from '@iconify/react';
import { useNavigate, useLocation, Outlet } from "react-router-dom"
import { useEffect, useState } from 'react';
import getCookieValue from '../../api/getCookie';
import NavbarButton from '../Button/NavbarButton';

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [isLogin, setIsLogin] = useState(false)
    const token = getCookieValue("token");

    const [isKelasActive, setKelasActive] = useState(true);
    const [isBellActive, setBellActive] = useState(false);
    const [isUserActive, setUserActive] = useState(false);

    useEffect(() => {
        const path = location.pathname;
        setKelasActive(path === '/courses');
        setBellActive(path === '/notification');
        setUserActive(path === '/users');
    }, [location.pathname]);

    const handleKelasClick = () => {
        setKelasActive(true);
        setBellActive(false);
        setUserActive(false);
        navigate("/courses")
    };

    const handleBellClick = () => {
        setKelasActive(false);
        setBellActive(true);
        setUserActive(false);
        navigate("/notification")
    };

    const handleUserClick = () => {
        setKelasActive(false);
        setBellActive(false);
        setUserActive(true);
        navigate("/user")
    };

    useEffect(() => {
        if (token === null) {
            setIsLogin(false)
        } else {
            setIsLogin(true)
        }
    }, [])

    return (
        <>
            <nav className="bg-DARKBLUE05 flex px-20 h-[100px]">
                <button onClick={() => navigate("/home")}>
                    <h1 className="my-auto w-[125px] h-[30px] text-3xl text-white font-bold">CraftIQ</h1>
                </button>
                <div className="my-auto">
                    <div className="bg-white ml-10 w-[526px] h-[62px] rounded-2xl">
                        <div className="py-3 px-6 flex gap-8">
                            <input type="text" className="w-[424px] outline-none border-none" placeholder="Cari Kursus Terbaik.." />
                            <button className="bg-DARKBLUE05 flex items-center justify-center w-[38px] h-[38px] rounded-lg">
                                <Icon icon="bx:search-alt" color="white" className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
                {isLogin ?

                    <div className="flex gap-4 ml-auto">
                        <NavbarButton isActive={isKelasActive} onClick={handleKelasClick} icon="tabler:list" text="Kelas" />
                        <NavbarButton isActive={isBellActive} onClick={handleBellClick} icon="lucide:bell" text="Notifikasi" />
                        <NavbarButton isActive={isUserActive} onClick={handleUserClick} icon="lucide:user" text="Akun" />
                    </div> :
                    <button className='flex gap-2 items-center justify-center my-auto ml-auto' onClick={()=>navigate("/login")}>
                        <Icon icon="ic:round-login" color="white" />
                        <p className='text-white font-medium'>Masuk</p>
                    </button>
                }
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Navbar