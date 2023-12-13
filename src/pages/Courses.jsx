import { Icon } from '@iconify/react';
// import Checkbox from "../components/Checkbox/Checkbox";
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
import AnimatedButton from '../components/Button/AnimatedButton';
import SidebarFilter from '../components/Filter/SidebarFilter';

const Courses = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [currentCourse, setCurrentCourse] = useState([])
    const [course, setCourse] = useState([])

    useEffect(() => {
        getCoursesApi();
        sideFilterFunction()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    })


    const getCoursesApi = () => {
        if(currentCourse.length <= 0  ){
            getCourses().then((res) => {
                const response = res.data.data
                setCourse(response);
                setCurrentCourse(response)
            })
        }else{
            return currentCourse;
        }
    }


    const sideFilterFunction = () => {

        const filterList = [];
        const delFilter = document.getElementById('deleteFilter');
        const checkList = [ 'uiux' , 'webdev' , 'android' , 'datasc' , 'semua' , 'beginner' , 'intermediate' , 'advanced' ];
        const fieldClass = document.getElementById('fieldClass');
        const searchClassButton = document.getElementById('searchClassButton');
        
        checkList.map((data)=>{
            const checkBoxValue = document.getElementById(data).value ;

            if(document.getElementById(data).checked){
                if(filterList.indexOf(checkBoxValue ) <= -1){
                    filterList.push(checkBoxValue )
                }
            }

            document.getElementById(data).onclick = () => {
                if(document.getElementById(data).checked){
                    if(filterList.indexOf(checkBoxValue ) <= -1){
                        filterList.push(checkBoxValue )
                    }
                }else{
                    if(filterList.indexOf(checkBoxValue ) >= -1){
                        filterList.splice(filterList.indexOf(data) , 1)
                    }
                }
            }
        })
        
        delFilter.onclick = () => {
            checkList.map((data)=>{
                if(document.getElementById(data).checked){
                    document.getElementById(data).addEventListener('click', function() {
                    })
                    document.getElementById(data).click();
                }
                filterList.length = 0
                setCourse(currentCourse)
            })
        }

        searchClassButton.onclick =  () => {
            
            if(fieldClass.value != ''){
                filterList.push(fieldClass.value)
            }

            const filteredDone = currentCourse.filter((data)=>{
                const initiateData = `${data.category.title + ' ' + data.level.toLowerCase()  + ' ' + data.title  + ' ' + data.description}`
                const filterChecked =  filterList.map((value)=>{
                    return initiateData.includes(value); 
                })

                if(filterChecked.includes(true)){
                    return data;
                }

                
                if(initiateData == ''){
                    return data;
                }
            }) 
            
            setCourse(filteredDone)
        }

    }


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
        <section>
        <div className="w-full bg-LIGHTBLUE">
                <div className="grid place-content-center">
                    <div className="w-[1024px] pt-10">
                <div className="flex justify-between items-center mb-16">
                    <h1 className="text-2xl font-bold">Topik Kelas</h1>
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
                    <SidebarFilter />
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
                                                <AnimatedButton>
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
                                            </AnimatedButton>
                                        </div>)
                                }else{
                                    return (
                                        <div
                                            key={item.id}
                                            onClick={() => {
                                                navigate("/courses/detail")
                                                dispatch(updateId(item.id))
                                            }}>
                                                <AnimatedButton>
                                            <Card
                                                picture={item.image}
                                                course={item.category.title}
                                                rating={item.rating}
                                                topic={item.title}
                                                author={item.authorBy}
                                                level={item.level}
                                                module={item.module.length + " Module"} 
                                                time={count / 60  + " Menit"} 
                                                price={formatRupiah(item.price)} />
                                            </AnimatedButton>
                                        </div>
                                    )
                                }
                                
                            })}
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

export default Courses