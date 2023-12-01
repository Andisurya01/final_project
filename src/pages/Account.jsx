import { Icon } from '@iconify/react';
import NavbarAlreadyLogin from '../components/Navbar/NavbarAlreadyLogin';
import { useState } from 'react';
import Footer from "../components/Footer/Footer"
import CardPaid from '../components/CourseCard/CardPaid';
import uiux from "../assets/img/uiux.jpg"

import { useNavigate } from "react-router-dom"

const Account = () => {
    const navigate = useNavigate()

    const [isProfileVisible, setProfileVisibility] = useState(false);
    const [isSetPasswordVisible, SetPasswordVisibility] = useState(false);
    const [isHistoryVisible, SetHistoryVisibility] = useState(false);

    const toggleProfileVisibility = () => {
        setProfileVisibility(!isProfileVisible);
        SetPasswordVisibility(false);
        SetHistoryVisibility(false);
    };

    const toggleSetPasswordVisibility = () => {
        SetPasswordVisibility(!isSetPasswordVisible);
        setProfileVisibility(false);
        SetHistoryVisibility(false);
    };

    const toggleHistoryVisibility = () => {
        SetHistoryVisibility(!isHistoryVisible);
        setProfileVisibility(false);
        SetPasswordVisibility(false);
    };
    
    const profileButtonSize = isProfileVisible ? 'text-lg font-black text-DARKBLUE05' : 'text-md'
    const setPasswordButtonSize = isSetPasswordVisible ? 'text-lg font-black text-DARKBLUE05' : 'text-md'
    const historyButtonSize = isHistoryVisible ? 'text-lg font-black text-DARKBLUE05' : 'text-md'


    return (
        <section>
            <NavbarAlreadyLogin />
            <div className="bg-LIGHTBLUE px-20 pt-10">
                <button className="flex justify-center items-center gap-4 mb-10">
                    <Icon icon="ph:arrow-left-bold" className="text-2xl text-DARKBLUE05" />
                    <p className="font-bold text-lg text-DARKBLUE05">Kembali ke Beranda</p>
                </button>
                <div className='flex justify-center'>
                    <div className='w-[900px] bg-DARKBLUE05 flex justify-center py-4 rounded-t-2xl'>
                        <p className='text-white font-medium'>Akun</p>
                    </div>
                </div>
            </div>
            <div className='px-20 mb-20'>
                <div className='flex justify-center'>
                    <div className='w-[900px] border border-DARKBLUE05 rounded-b-2xl'>
                    
                    
                    <div className={`float-right w-[480px] grid place-content-center py-8 ${isProfileVisible ? '' : 'hidden'}`}>
                        <div className='flex justify-center'>
                            <div className='bg-DARKBLUE05 w-24 h-24 rounded-full flex justify-center items-center mb-6'>
                                Photo
                            </div>
                        </div>
                        <div className='mb-6'>
                            <div className='mb-4'>
                                <p className='mb-2'>Nama</p>
                                <div className='w-80 rounded 2-xl border border-DARKGREY p-2'>
                                    <input type="text" placeholder='John Doe' className="focus:outline-none focus:ring-0 text-sm" />
                                </div>
                            </div>
                            <div className='mb-4'>
                                <p className='mb-2'>Email</p>
                                <div className='w-80 rounded 2-xl border border-DARKGREY p-2'>
                                    <input type="email" placeholder='johndoe@mail.com' className="focus:outline-none focus:ring-0 text-sm" />
                                </div>
                            </div>
                            <div className='mb-4'>
                                <p className='mb-2'>Nomor Telepon</p>
                                <div className='w-80 rounded 2-xl border border-DARKGREY p-2'>
                                <input type="tel" id="nomorTelepon" name="nomorTelepon" pattern="[+]\d{2}\d{9,12}" placeholder="+62XXXXXXXXXXXX" className="focus:outline-none focus:ring-0 text-sm" />
                                </div>
                            </div>
                            <div className='mb-4'>
                                <p className='mb-2'>Negara</p>
                                <div className='w-80 rounded 2-xl border border-DARKGREY p-2'>
                                <input type="text" placeholder='Negara anda' className="focus:outline-none focus:ring-0 text-sm" />
                                </div>
                            </div>
                            <div className='mb-4'>
                                <p className='mb-2'>Kota</p>
                                <div className='w-80 rounded 2-xl border border-DARKGREY p-2'>
                                <input type="text" placeholder='Kota anda' className="focus:outline-none focus:ring-0 text-sm" />
                                </div>
                            </div>
                        </div>
                        <button>
                            <div className='bg-DARKBLUE05 p-3 rounded-full'>
                                <p className='text-lg text-white font-bold'>Simpan Profil Saya</p>
                            </div>
                        </button>
                    </div>


                    <div className={`float-right w-[480px] grid place-content-center py-8 ${isSetPasswordVisible ? '' : 'hidden'}`}>
                        <div className='flex justify-center mb-6'>
                            <h1 className='font-bold text-2xl'>Ubah Password</h1>
                        </div>
                        <div className='mb-6'>
                            <div className='mb-4'>
                                <p className='mb-2'>Masukkan Password Lama</p>
                                <div className='w-80 rounded 2-xl border border-DARKGREY p-2 flex justify-between'>
                                    <input type="password" className="focus:outline-none focus:ring-0 text-sm" />
                                    <Icon icon="lucide:eye" className='text-DARKGREY text-2xl'/>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <p className='mb-2'>Masukkan Password Baru</p>
                                <div className='w-80 rounded 2-xl border border-DARKGREY p-2 flex justify-between'>
                                    <input type="password" className="focus:outline-none focus:ring-0 text-sm" />
                                    <Icon icon="lucide:eye" className='text-DARKGREY text-2xl'/>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <p className='mb-2'>Ulangi Password Baru</p>
                                <div className='w-80 rounded 2-xl border border-DARKGREY p-2 flex justify-between'>
                                    <input type="password" className="focus:outline-none focus:ring-0 text-sm" />
                                    <Icon icon="lucide:eye" className='text-DARKGREY text-2xl'/>
                                </div>
                            </div>
                        </div>
                        <button>
                            <div className='bg-DARKBLUE05 p-3 rounded-full'>
                                <p className='text-lg text-white font-bold'>Ubah Password</p>
                            </div>
                        </button>
                    </div>


                    <div className={`float-right w-[480px] grid place-content-center py-8 ${isHistoryVisible ? '' : 'hidden'}`}>
                        <div className='flex justify-center mb-6'>
                            <h1 className='font-bold text-2xl'>Riwayat Pembayaran</h1>
                        </div>
                        <div className='mb-6'>
                            <div className='mb-4'>
                            <CardPaid picture={uiux}
                            course={"UI/UX Design"} 
                            rating={"4.7"}
                            topic={"Belajar Web Designer dengan Figma"}
                            author={"Angela Doe"}
                            level={"Intermediate Level"}
                            module={"10 Modul"}
                            time={"120 Menit"}
                            price={"Rp250.000"}
                            isPaid={false} />
                            </div>
                            <div className='mb-4'>
                            <CardPaid picture={uiux}
                            course={"UI/UX Design"} 
                            rating={"4.7"}
                            topic={"Belajar Web Designer dengan Figma"}
                            author={"Angela Doe"}
                            level={"Intermediate Level"}
                            module={"10 Modul"}
                            time={"120 Menit"}
                            price={"Rp250.000"}
                            isPaid={true} />
                            </div>
                        </div>
                    </div>

                        <div className='w-[370px] py-4 px-4'>
                            <button onClick={toggleProfileVisibility}>
                                <div className='flex items-center gap-4 py-4'>
                                    <Icon icon="iconamoon:edit" className='text-DARKBLUE05 text-3xl' />
                                    <p className={`font-medium ${profileButtonSize}`}>Profil Saya</p>
                                </div>
                            </button>
                            <hr className="w-80 h-0.5 bg-LIGHTGREY"/>
                            <button onClick={toggleSetPasswordVisibility}>
                                <div className='flex items-center gap-4 py-4'>
                                    <Icon icon="lets-icons:setting-line" className='text-DARKBLUE05 text-3xl' />
                                    <p className={`font-medium ${setPasswordButtonSize}`}>Ubah Password</p>
                                </div>
                            </button>
                            <hr className="w-80 h-0.5 bg-LIGHTGREY"/>
                            <button onClick={toggleHistoryVisibility}>
                                <div className='flex items-center gap-4 py-4'>
                                    <Icon icon="mdi:cart-outline" className='text-DARKBLUE05 text-3xl' />
                                    <p className={`font-medium ${historyButtonSize}`}>Riwayat Pembayaran</p>
                                </div>
                            </button>
                            <hr className="w-80 h-0.5 bg-LIGHTGREY"/>
                            <button onClick={() => navigate("/")}>
                                <div className='flex items-center gap-4 py-4'>
                                    <Icon icon="ic:round-logout" className='text-DARKBLUE05 text-3xl' />
                                    <p className='font-medium'>Keluar</p>
                                </div>
                            </button>
                            <hr className="w-80 h-0.5 bg-LIGHTGREY"/>
                            <div className='flex justify-center mt-10'>
                                <p className='text-sm text-DARKGREY'>Version 1.1.0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Account