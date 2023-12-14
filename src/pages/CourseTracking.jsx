import uiux from "../assets/img/uiux.jpg"
import { Icon } from '@iconify/react';
// import Checkbox from "../components/Checkbox/Checkbox";
import ProgressCard from "../components/CourseCard/ProgressCard";
import Footer from "../components/Footer/Footer"
import FilterPlanProgress from "../components/Filter/FilterPlanProgress";

import { useNavigate } from "react-router-dom"
import SidebarFilter from "../components/Filter/SidebarFilter";
import { useState } from "react";
import { consumeOrderApi } from '../api/order';
import { useEffect } from "react";

const CourseTracking = () => {
    const navigate = useNavigate()
    const [ course, setCourse  ] = useState('');

    useEffect(()=>{
        getCourseByOrder();
    })

    const getCourseByOrder = () => {
        if(course.length <= 0 ){          
            consumeOrderApi.getOrderUser().then((res) => {
                if(res.status == 'OK'){
                    setCourse(res.data)
                }
            })
        }else{
            return course;
        }
    }


    return (
        <section className="">
            <div className="w-full bg-LIGHTBLUE">
                <div className="grid place-content-center">
                    <div className="w-[1024px] pt-10">
                <div className="flex justify-between items-center mb-16">
                    <h1 className="text-2xl font-bold">Kelas Berjalan</h1>
                    <div className="flex gap-16 bg-white border-2 border-DARKBLUE05 rounded-full px-6 py-3">
                        <input id='fieldClass' type="text" className="w-32 outline-none border-none" placeholder="Cari Kelas" />
                        <button id='searchClassButton' className="bg-DARKBLUE05 flex items-center justify-center w-9 h-9 rounded-xl">
                            <Icon icon="bx:search-alt" color="white" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                </div>
                </div>

                <div className="grid place-content-center">
                    <div className="w-[1024px] pb-20">
                <div className="flex gap-20">
                    <SidebarFilter/>

                    <div className="w-3/4">
                        <div className="mb-10 flex justify-between">
                            <FilterPlanProgress title={"All"}/>
                            <FilterPlanProgress title={"In Progress"}/>
                            <FilterPlanProgress title={"Complete"}/>
                        </div>
                        <div className="flex flex-wrap gap-x-14 gap-y-10">
                            {
                                course.map(data => {
                                    return (
                                    <button key={data.id} onClick={() => navigate("/courses/detail")}>
                                        <ProgressCard picture={uiux}
                                            course={"UI/UX Design"} 
                                            rating={"4.7"}
                                            topic={"Belajar Web Designer dengan Figma"}
                                            author={"Angela Doe"}
                                            level={"Intermediate Level"}
                                            module={"10 Modul"}
                                            time={"120 Menit"}
                                            width="50%"
                                            complete={"50% Complete"}/>
                                    </button>
                                    )
                                })
                            }
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

export default CourseTracking