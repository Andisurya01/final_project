import logoDummy from "../../assets/img/logo_dummy.png"
import { Icon } from '@iconify/react';

const NavbarAlreadyLogin = () => {
    return (
        <div className="bg-DARKBLUE05 flex px-20 h-[100px]">
            <img src={logoDummy} className="my-auto w-[125px] h-[30px]" alt="logo belajar" />
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
            <div className='flex gap-4 ml-auto'>
                <button className='items-center justify-center'>
                    <div className="bg-DARKBLUE03 flex items-center justify-center gap-2 py-1 px-5 rounded-lg">
                        <Icon icon="tabler:list" color="white"/>
                        <p className="text-white font-medium">Kelas</p>
                    </div>
                </button>
                <button>
                    <Icon icon="lucide:bell" color="white" className="w-6 h-6"/>
                </button>
                <button>
                    <Icon icon="lucide:user" color="white" className="w-6 h-6"/>
                </button>
            </div>
        </div>
    )
}

export default NavbarAlreadyLogin