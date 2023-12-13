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
                setNotification(response)
            })
    }, [])

    return (
        <section>
            <div className="bg-LIGHTBLUE px-20 pt-10">
                <button className="flex justify-center items-center gap-4 mb-10" onClick={() => history.back()} >
                    <Icon icon="ph:arrow-left-bold" className="text-2xl text-DARKBLUE05" />
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
                                        <div key={item.id} className='flex justify-between'>
                                            <div className='flex items-center'>
                                                <Icon icon="material-symbols-light:circle-notifications-rounded" className='text-4xl text-DARKBLUE05' />
                                                <p className='text-DARKBLUE05 font-medium ml-2'>{item.title}</p>
                                            </div>
                                            <div className='flex gap-2 items-center'>
                                                <p className='text-DARKGREY text-sm'>{item.createdAt}</p>
                                                <Icon icon="material-symbols:circle" className={item.isViewed ? "text-SUCCESS" : "text-WARNING"} />
                                            </div>
                                        </div>
                                        <div className='px-11'>
                                            <p className='text-sm font-semibold mb-1'>{item.subtitle}</p>
                                            <p className='text-sm text-DARKGREY'>Syarat dan Ketentuan berlaku!</p>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Notification