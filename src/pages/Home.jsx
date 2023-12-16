
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
import AnimatedButton from "../components/Button/AnimatedButton"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


const Home = () => {

    const navigate = useNavigate()
    const [categories, setCategories] = useState([]);
    const [course, setCourse] = useState([])
    const [currentCourse, setCurrentCourse] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        consumeCategoriesApi.getCategories().then((res) => {
            const currentCategory = res.data?.filter((data) => {
                return res.data.indexOf(data) < 6
            })

            setCategories(currentCategory);
        })


        getCourses().then((res) => {
            setIsLoading(true)
            const response = res.data.data
            if(res.data.status == 'OK'){
                const popularCourse = response.filter((data) => {
                    return data.rating >= 4.5
                })
    
                const popularCourses = popularCourse.filter(data => popularCourse.indexOf(data) < 3)
    
                setCourse(popularCourses);
                setCurrentCourse(popularCourses)
                setIsLoading(false)
            }
        })

    }, []);
    


    const filterCategories = (titleCategory) => {
        getCourses().then((res) => {
            const response = res.data.data

            const popularCourse = response.filter((data) => {
                if(data.category.title == titleCategory){
                    return data.rating >= 4.5 
                }
            })

            const popularCourses = popularCourse.filter(data => popularCourse.indexOf(data) < 3)

            setCourse(popularCourses);
        })
    }

    return (
        <section className="">
            <Header />
            <div className="w-full bg-LIGHTBLUE">
                <div className="grid place-content-center">
                    <div className="w-full lg:w-[1024px] py-5">
                        <div className="pb-4 flex justify-between">
                            <p className="text-xl font-bold">Kategori Belajar</p>
                            <button onClick={() => navigate("/courses")} className="text-DARKBLUE05 text-sm font-bold">Lihat Semua</button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-0 lg:flex lg:flex-row justify-between">
                            {
                                categories.map((data) => {
                                    return (<AnimatedButton key={data.id}><Frame picture={data.image} title={data.title} /></AnimatedButton>)

                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="grid place-content-center">
                    <div className="w-full lg:w-[1024px] py-5">
                        <div className="pb-4 flex justify-between">
                            <p className="text-xl font-bold">Kursus Populer</p>
                            <button onClick={() => navigate("/courses")} className="text-DARKBLUE05 text-sm font-bold">Lihat Semua</button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 mb-5 gap-2 lg:gap-0 lg:flex lg:flex-row justify-between">
                            <button onClick={()=>{ setCourse(currentCourse) }} ><FilterCourseHome title={"All"} /></button>
                            {
                                categories.map((data) => {
                                    return (<button onClick={()=>{filterCategories(data.title)}} key={data.id}><FilterCourseHome title={data.title} /></button>)

                                })
                            }

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:flex lg:flex-row justify-between mb-10">
                            {
                                isLoading ? 
                                    <>
                                        <div >
                                            <Skeleton height={'100px'} width={'323px'}/>
                                            <Skeleton count={3} />
                                        </div>
                                        <div >
                                            <Skeleton height={'100px'} width={'323px'}/>
                                            <Skeleton count={3} />
                                        </div>
                                        <div >
                                            <Skeleton height={'100px'} width={'323px'}/>
                                            <Skeleton count={3} />
                                        </div>
                                    </>
                                :
                                course.map(data => {
                                    return (
                                        <AnimatedButton key={data.id}>
                                            <Card
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
                                        </AnimatedButton>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Home;

