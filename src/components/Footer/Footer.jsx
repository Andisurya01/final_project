import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <div className="bg-DARKBLUE05 px-32 py-10 text-white">
            <div className="grid grid-cols-3 gap-12">
                <div>
                    <p className="mb-2">The Breeze, Jl. BSD Grand Boulevard, BSD City, Kec. Cisauk, Kab. Tangerang, Banten 15345</p>
                    <p className="mb-2">belajar@binar.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div>
                    <p className="text-2xl font-medium">Connect With Us</p>
                    <div className="text-4xl flex gap-4 mt-3">
                        <div className="bg-white text-DARKBLUE05 flex items-center justify-center w-12 h-12 rounded-[30px]">
                            <a href="https://facebook.com"><Icon icon="ri:facebook-fill" /></a>
                        </div>
                        <div className="bg-white text-DARKBLUE05 flex items-center justify-center w-12 h-12 rounded-[30px]">
                            <a href="https://x.com"><Icon icon="ri:twitter-x-fill" /></a>
                        </div>
                        <div className="bg-white text-DARKBLUE05 flex items-center justify-center w-12 h-12 rounded-[30px]">
                            <a href="https://instagram.com"><Icon icon="ri:instagram-line" /></a>
                        </div>
                        <div className="bg-white text-DARKBLUE05 flex items-center justify-center w-12 h-12 rounded-[30px]">
                            <a href=""><Icon icon="ic:outline-email" /></a>
                        </div>
                        <div className="bg-white text-DARKBLUE05 flex items-center justify-center w-12 h-12 rounded-[30px]">
                            <a href="https://discord.com"><Icon icon="ic:baseline-discord" /></a>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="mb-4 text-5xl font-bold">CraftIQ</h1>
                    <p>&copy; Binar Academy, 2023</p>
                    <p><small>Develop by Kelompok 2 FSW1 X AND2</small></p>
                    <p><small>Kampus Merdeka Batch 5</small></p>
                </div>
            </div>
        </div>
    )
}

export default Footer