import { Icon } from '@iconify/react';
import Checkbox from "../components/Checkbox/Checkbox";
import Footer from "../components/Footer/Footer"
import Card from "../components/CourseCard/Card"
import { updateId } from '../store/moduleCourses';

import FilterPlanProgress from "../components/Filter/FilterPlanProgress";

import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { getCourses } from "../api/servicesApi";
import { useDispatch } from 'react-redux';
import { formatRupiah } from '../lib/rupiahFormat';
import FreeCard from '../components/CourseCard/FreeCard';

const Courses = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [currentCourse, setCurrentCourse] = useState([])
    const [course, setCourse] = useState([])

    useEffect(() => {

        getCourses().then((res) => {
            const response = res.data.data
            setCourse(response);
            setCurrentCourse(response)
        })

    }, [])


    const filterTypeFunction = (TYPE) => {
        if(TYPE == 'PREMIUM' ){
            const premiumData = currentCourse.filter((data)=>{
                return data.type == 'PREMIUM';
            }) 
            setCourse(premiumData)
        }else if(TYPE == 'FREE'){
            const freeData = currentCourse.filter((data)=>{
                return data.type == 'FREE';
            }) 
            setCourse(freeData)
        }else{
            setCourse(currentCourse);
        } 
    }

    return (
        <section className="">
            <div className="bg-LIGHTBLUE px-32 py-10">
                <div className="flex justify-between items-center mb-16">
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
                        <hr className="mb-3" />
                        <div className="flex justify-center">
                            <button className="text-WARNING text-sm font-medium">Hapus Filter</button>
                        </div>
                    </div>

                    <div className="w-3/4">
                        <div className="mb-10 flex justify-between">
                            <div onClick={()=>{
                                filterTypeFunction('')
                            }}><FilterPlanProgress title={"All"} /></div>

                            <div onClick={()=>{
                                
                                filterTypeFunction('PREMIUM')
                            }}>
                                <FilterPlanProgress title={"Premium"} />
                            </div>

                            <div onClick={()=>{
                                filterTypeFunction('FREE')
                                
                            }}> 
                                <FilterPlanProgress title={"Kelas Gratis"} />
                            </div>
                        </div>
                        <div id='courseList' className="flex flex-wrap gap-10">
                            {course.map((item) => {
                                let count = 0
                                for (let i = 0; i < item.module.length; i++) {
                                    count = count + item.module[i].time
                                }

                                if(item.type == 'FREE'){
                                    return (
                                        <div 
                                            key={item.id}
                                            onClick={() => {
                                                navigate("/courses/detail")
                                                dispatch(updateId(item.id))
                                            }}>
                                            <FreeCard
                                                picture={item.image}
                                                course={item.category.title}
                                                rating={item.rating}
                                                topic={item.title}
                                                author={item.authorBy}
                                                level={item.level}
                                                module={item.module.length + " Module"} 
                                                time={count / 60  + " Menit"} 
                                            />
                                        </div>)
                                }else{
                                    return (
                                        <div
                                            key={item.id}
                                            onClick={() => {
                                                navigate("/courses/detail")
                                                dispatch(updateId(item.id))
                                            }}>
                                            <Card
                                                picture={item.image}
                                                course={item.category.title}
                                                rating={item.rating}
                                                topic={item.title}
                                                author={item.authorBy}
                                                level={item.level}
                                                module={item.module.length + " Module"} // perlu diberi logic tambahan / belum beres
                                                time={count / 60  + " Menit"} // perlu diberi logic tambahan / belum beres
                                                price={formatRupiah(item.price)} />
                                        </div>
                                    )
                                }

                                
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Courses