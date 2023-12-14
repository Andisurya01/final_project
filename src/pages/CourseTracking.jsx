import { Icon } from '@iconify/react';
import ProgressCard from "../components/CourseCard/ProgressCard";
import Footer from "../components/Footer/Footer"
import FilterPlanProgress from "../components/Filter/FilterPlanProgress";
import { updateId } from '../store/moduleCourses';
import { useNavigate } from "react-router-dom"
import SidebarFilter from "../components/Filter/SidebarFilter";
import { useEffect , useState} from "react";
import { consumeCourseTrackingsApi } from '../api/courseTrackings';
import { useDispatch } from 'react-redux';

const CourseTracking = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ courseTrack, setCourseTrack  ] = useState([]);
    const [currentCourseTrack, setCurrentCourseTrack] = useState([])

    useEffect(()=>{
        getCourseByOrder();
        sideFilterFunction();
    })

    const getCourseByOrder = () => {
        if(currentCourseTrack.length <= 0 ){          
            consumeCourseTrackingsApi.getCourseTrackings().then((res) => {
                if(res.status == 'OK'){
                    setCourseTrack(res.data)
                    setCurrentCourseTrack(res.data)
                }
            })
        }else{
            return currentCourseTrack;
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
                setCourseTrack(currentCourseTrack)
            })
        }

        searchClassButton.onclick =  () => {
            
            if(fieldClass.value != ''){
                filterList.push(fieldClass.value)
            }

            const filteredDone = currentCourseTrack.filter((data)=>{
                const initiateData = `${data.category.title + ' ' + data.level.toLowerCase()  + ' ' + data.title  + ' ' + data.description}`
                const filterChecked =  filterList.map((value)=>{
                    return initiateData.includes(value); 
                })

                if(filterChecked.includes(true)){
                    return data;
                }

                if(fieldClass.value == '' & filterList.length == 0){
                    return data;
                }

                if(initiateData == ''){
                    return data;
                }
            }) 
            
            setCourseTrack(filteredDone)
        }

    }

    const filterTypeFunction = (TYPE) => {
        if(TYPE == 'PROGRESS' ){
            const progressData = currentCourseTrack.filter((data)=>{
                return data.status == 'PROGRESS';
            }) 
            setCourseTrack(progressData)
        }else if(TYPE == 'DONE'){
            const doneData = currentCourseTrack.filter((data)=>{
                return data.status == 'DONE';
            }) 
            setCourseTrack(doneData)
        }else{
            setCourseTrack(currentCourseTrack);
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
                        <div onClick={()=>{
                                filterTypeFunction('')
                            }}><FilterPlanProgress title={"All"} /></div>

                            <div onClick={()=>{
                                
                                filterTypeFunction('PROGRESS')
                            }}>
                                <FilterPlanProgress title={"In Progress"} />
                            </div>

                            <div onClick={()=>{
                                filterTypeFunction('DONE')
                                
                            }}> 
                                <FilterPlanProgress title={"Complete"} />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-x-14 gap-y-10">
                            {
                                courseTrack.map((data) => {
                                    return (
                                        <button key={data.id} onClick={() => {
                                            navigate("/courses/detail/unlock")
                                            dispatch(updateId(data.course.id))
                                        } }>
                                            <ProgressCard picture={data.course.image}
                                                course={data.course.category.title} 
                                                rating={data.course.rating}
                                                topic={data.course.title}
                                                author={data.course.authorBy}
                                                level={data.course.level}
                                                module={`${data.course.module.length} Module`}
                                                time={
                                                    `${data.course.module.reduce((accumulator, currentValue) => {
                                                        return accumulator + currentValue.time;
                                                    }, 0) / 60} Menit`
                                                }
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