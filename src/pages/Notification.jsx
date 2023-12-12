import { Icon } from '@iconify/react';
import Footer from "../components/Footer/Footer"
import { useEffect, useState } from 'react';
import { getNotifications } from '../api/servicesApi';

const Notification = () => {
    const [notification, setNotification] = useState([])
    useEffect(() => {
        getNotifications()
            .then((res) => {
                const response = res.data.data
                console.log(response)
            })
    }, [])

    return (
        <section>
            <div className="bg-LIGHTBLUE px-20 pt-10">
                <button className="flex justify-center items-center gap-4 mb-10">
                    <Icon icon="ph:arrow-left-bold" className="text-2xl text-DARKBLUE05" onClick={() => history.back()} />
                    <p className="font-bold text-lg text-DARKBLUE05">Kembali ke Beranda</p>
                </button>
                <div className='flex justify-center'>
                    <div className='w-[900px] bg-DARKBLUE05 flex justify-center py-4 rounded-t-2xl'>
                        <p className='text-white font-medium'>Notifikasi</p>
                    </div>
                </div>
            </div>
            <div className='px-20 mb-20'>
                <div className='flex justify-center'>
                    <div className='w-[900px] border border-DARKBLUE05 rounded-b-2xl flex justify-center'>
                        <div className='w-[700px]'>
                            {notification.map((item) => {
                                return (
                                    <div key={item.id} className='py-4'>
                                        <div className='flex justify-between'>
                                            <div className='flex items-center'>
                                                <Icon icon="material-symbols-light:circle-notifications-rounded" className='text-4xl text-DARKBLUE05' />
                                                <p className='text-DARKBLUE05 font-medium ml-2'>Promosi</p>
                                            </div>
                                            <div className='flex gap-2 items-center'>
                                                <p className='text-DARKGREY text-sm'>2 Maret, 12:00</p>
                                                <Icon icon="material-symbols:circle" className='text-sm text-SUCCESS' />
                                            </div>
                                        </div>
                                        <div className='px-11'>
                                            <p className='text-sm font-semibold mb-1'>Dapatkan Potongan 50% selama Bulan Maret!</p>
                                            <p className='text-sm text-DARKGREY'>Syarat dan Ketentuan berlaku!</p>
                                        </div>
                                    </div>

                                )
                            })}
                            <div className='py-4'>
                                <div className='flex justify-between'>
                                    <div className='flex items-center'>
                                        <Icon icon="material-symbols-light:circle-notifications-rounded" className='text-4xl text-DARKBLUE05' />
                                        <p className='text-DARKBLUE05 font-medium ml-2'>Notifikasi</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-DARKGREY text-sm'>1 Maret, 10:00</p>
                                        <Icon icon="material-symbols:circle" className='text-sm text-WARNING' />
                                    </div>
                                </div>
                                <div className='px-11'>
                                    <p className='text-sm font-semibold mb-1'>Password berhasil diubah</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Notification