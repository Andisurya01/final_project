import uiux from "../assets/img/uiux.jpg"
import NavbarAlreadyLogin from "../components/Navbar/NavbarAlreadyLogin"
import { Icon } from '@iconify/react';
import Checkbox from "../components/Checkbox/Checkbox";
import Footer from "../components/Footer/Footer"
import Card from "../components/CourseCard/Card"
import FreeCard from "../components/CourseCard/FreeCard"
import FilterPlanProgress from "../components/Filter/FilterPlanProgress";

const Courses = () => {
    return (
        <section className="">
            <NavbarAlreadyLogin />
            <div className="bg-LIGHTBLUE px-32 py-10">
                <div className="flex justify-between items-center justify-center mb-16">
                    <h1 className="text-2xl font-bold">Topik Kelas</h1>
                    <div className="flex gap-16 bg-white border-2 border-DARKBLUE05 rounded-full px-6 py-3">
                        <input type="text" className="w-32 outline-none border-none" placeholder="Cari Kelas" />
                        <button className="bg-DARKBLUE05 flex items-center justify-center w-9 h-9 rounded-xl">
                            <Icon icon="bx:search-alt" color="white" className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="flex gap-20">
                <div className="bg-white w-1/4 rounded-xl px-6 py-8">
                    <div className="mb-10">
                        <h1 className="text-2xl font-bold mb-5">Filter</h1>
                        <Checkbox title={'Paling Baru'} />
                        <Checkbox title={'Paling Populer'} />
                        <Checkbox title={'Promo'} />
                    </div>
                    <div className="mb-10">
                        <h1 className="text-2xl font-bold mb-5">Kategori</h1>
                        <Checkbox title={'UI/UX Design'} />
                        <Checkbox title={'Web Development'} />
                        <Checkbox title={'Android Development'} />
                        <Checkbox title={'Data Science'} />
                        <Checkbox title={'Business Intelligence'} />
                    </div>
                    <div className="mb-10">
                        <h1 className="text-2xl font-bold mb-5">Level Kesulitan</h1>
                        <Checkbox title={'Semua Level'} />
                        <Checkbox title={'Beginner Level'} />
                        <Checkbox title={'Intermediate Level'} />
                        <Checkbox title={'Advanced Level'} />
                    </div>
                    <hr className="mb-3"/>
                    <div className="flex justify-center">
                        <button className="text-WARNING text-sm font-medium">Hapus Filter</button>
                    </div>
                </div>

                <div className="w-3/4">
                    <div className="mb-10 flex justify-between">
                        <FilterPlanProgress title={"All"}/>
                        <FilterPlanProgress title={"Premium"}/>
                        <FilterPlanProgress title={"Kelas Gratis"}/>
                    </div>
                    <div className="flex flex-wrap gap-10">
                    <Card picture={uiux}
                    course={"UI/UX Design"} 
                    rating={"4.7"}
                    topic={"Belajar Web Designer dengan Figma"}
                    author={"Angela Doe"}
                    level={"Intermediate Level"}
                    module={"10 Modul"}
                    time={"120 Menit"}
                    price={"Rp250.000"}/>
                    <FreeCard picture={uiux}
                    course={"UI/UX Design"} 
                    rating={"4.7"}
                    topic={"Membuat Grid System dengan Figma"}
                    author={"Simon Doe"}
                    level={"Advanced Level"}
                    module={"10 Modul"}
                    time={"100 Menit"}/>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Courses