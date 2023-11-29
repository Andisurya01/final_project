// image
import uiux from "../assets/img/uiux.jpg"
import pm from "../assets/img/pm.jpg"
import web from "../assets/img/webdev.jpg"
import and from "../assets/img/android.jpg"
import ios from "../assets/img/ios.jpg"
import science from "../assets/img/datasc.jpg"

// component
import NavbarNotLogin from "../components/Navbar/NavbarNotLogin"
import Header from "../components/Header/Header"
import Frame from "../components/PhotoFrame/Frame"
import FilterCourseHome from "../components/Filter/FilterCourseHome"
import Card from "../components/CourseCard/Card"
import Footer from "../components/Footer/Footer"

const Home = () => {
    return (
        <section className="">
            <NavbarNotLogin />
            <Header />
            <div className="bg-LIGHTBLUE px-32 py-5 h-56">
                <div className="pb-4 flex justify-between">
                    <p className="text-xl font-bold">Kategori Belajar</p>
                    <a href="#" className="text-DARKBLUE05 text-sm font-bold">Lihat Semua</a>
                </div>
                <div className="flex justify-between">
                    <Frame picture={uiux} title={"UI/UX Design"}/>
                    <Frame picture={pm} title={"Product Management"}/>
                    <Frame picture={web} title={"Web Development"}/>
                    <Frame picture={and} title={"Android Development"}/>
                    <Frame picture={ios} title={"iOS Development"}/>
                    <Frame picture={science} title={"Data Science"}/>
                </div>
            </div>
            <div className="px-32 py-5 h-full">
                <div className="pb-4 flex justify-between">
                    <p className="text-xl font-bold">Kursus Populer</p>
                    <a href="#" className="text-DARKBLUE05 text-sm font-bold">Lihat Semua</a>
                </div>

                <div className= "pb-4 flex justify-between">
                    <FilterCourseHome title={"All"}/>
                    <FilterCourseHome title={"Data Science"}/>
                    <FilterCourseHome title={"UI/UX Design"}/>
                    <FilterCourseHome title={"Android Development"}/>
                    <FilterCourseHome title={"Web Development"}/>
                    <FilterCourseHome title={"iOS Development"}/>
                    <FilterCourseHome title={"Business Intelligence"}/>
                </div>

                <div className="pb-4 flex justify-between">
                    <Card picture={uiux}
                        course={"UI/UX Design"} 
                        rating={"4.7"}
                        topic={"Belajar Web Designer dengan Figma"}
                        author={"Angela Doe"}
                        level={"Intermediate Level"}
                        module={"10 Modul"}
                        time={"120 Menit"}
                        price={"Rp 249.000"}/>
                    <Card picture={uiux}
                        course={"UI/UX Design"} 
                        rating={"4.7"}
                        topic={"Belajar Web Designer dengan Figma"}
                        author={"Angela Doe"}
                        level={"Intermediate Level"}
                        module={"10 Modul"}
                        time={"120 Menit"}
                        price={"Rp 249.000"}/>
                    <Card picture={uiux}
                        course={"UI/UX Design"} 
                        rating={"4.7"}
                        topic={"Belajar Web Designer dengan Figma"}
                        author={"Angela Doe"}
                        level={"Intermediate Level"}
                        module={"10 Modul"}
                        time={"120 Menit"}
                        price={"Rp 249.000"}/>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Home;

