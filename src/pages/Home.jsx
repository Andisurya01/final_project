
// component
import Header from "../components/Header/Header"
import Frame from "../components/PhotoFrame/Frame"
import FilterCourseHome from "../components/Filter/FilterCourseHome"
import Card from "../components/CourseCard/Card"
import Footer from "../components/Footer/Footer"

import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { consumeCategoriesApi } from "../api/category"
import { getCourses } from "../api/servicesApi";
import { formatRupiah } from '../lib/rupiahFormat';


const Home = () => {

    const navigate = useNavigate()
    const [ categories, setCategories] = useState([]);
    const [course, setCourse] = useState([])


    useEffect(() => {
        consumeCategoriesApi.getCategories().then((res)=>{
            const currentCategory = res.data.filter((data)=>{
                return res.data.indexOf(data) < 6
            })

            setCategories(currentCategory);
        })


        getCourses().then((res) => {
            const response = res.data.data

            const popularCourse = response.filter((data)=>{
                return data.rating >= 4.5 
            })

            const popularCourses = popularCourse.filter(data => popularCourse.indexOf(data) < 3)

            setCourse(popularCourses);
        })

    });


    return (
        <section className="">
            <Header />
            <div className="bg-LIGHTBLUE px-32 py-5 h-56">
                <div className="pb-4 flex justify-between">
                    <p className="text-xl font-bold">Kategori Belajar</p>
                    <a href="#" className="text-DARKBLUE05 text-sm font-bold">Lihat Semua</a>
                </div>
                <div className="flex justify-between">
                    {
                        categories.map((data)=>{
                            return (  <Frame key={data.id} picture={data.image} title={data.title}/>  )   
                            
                        })
                    }
                </div>
            </div>
            <div className="px-32 py-5 h-full">
                <div className="pb-4 flex justify-between">
                    <p className="text-xl font-bold">Kursus Populer</p>
                    <button onClick={() => navigate("/courses")} className="text-DARKBLUE05 text-sm font-bold">Lihat Semua</button>
                </div>

                <div className= "pb-4 flex justify-between">
                    <FilterCourseHome title={"All"}/>
                    {
                        categories.map((data)=>{
                        return (  <FilterCourseHome key={data.id} title={data.title}/>  )   
                        
                        })
                    }

                </div>

                <div className="pb-4 flex justify-between">
                    {
                        course.map( data => {
                            return (
                                <Card
                                    key={data.id} 
                                    picture={data.image}
                                    course={data.category.title} 
                                    rating={data.rating}
                                    topic={data.title}
                                    author={data.authorBy}
                                    level={data.level}
                                    module={`${data.module.length} Module`}
                                    time={
                                        `${data.module.reduce((accumulator, currentValue) => {
                                            return accumulator + currentValue.time;
                                        }, 0) / 60} Menit`
                                    }
                                    price={formatRupiah(data.price)}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Home;

