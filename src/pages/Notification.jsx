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
            <div className="bg-LIGHTBLUE h-[170px]">
                <div className='lg:grid lg:place-content-center px-4 lg:px-0'>
                    <div className="w-full lg:w-[1024px] pt-10">
                        <div>
                            <div className='mb-12'>
                                <button className="flex justify-center items-center gap-4 mb-10" onClick={() => history.back()} >
                                    <Icon icon="ph:arrow-left-bold" className="text-xl text-DARKBLUE05" />
                                    <p className="font-bold text-DARKBLUE05">Kembali ke Beranda</p>
                                </button>
                            </div>
                            <div className='flex justify-center'>
                                <div className='w-full md:w-[900px] bg-DARKBLUE05 flex justify-center py-4 rounded-t-2xl'>
                                    <p className='text-white font-medium'>Notifikasi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:grid lg:place-content-center px-4 lg:px-0 mb-20'>
                    <div className="w-full lg:w-[1024px]">
                        <div>
                            <div className='flex justify-center'>
                                <div className='w-full md:w-[900px] border border-DARKBLUE05 rounded-b-2xl flex justify-center'>
                                    <div className='w-full px-2 lg:px-0 md:w-[700px]'>
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
                    </div>
                </div>
                <Footer/>
            </div>
        </section>
    )
}

export default Notification