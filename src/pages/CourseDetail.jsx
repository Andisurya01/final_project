import { useEffect, useState } from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    Typography,
} from "@material-tailwind/react";

import { useSelector } from "react-redux";
import { Icon } from '@iconify/react';
import Footer from "../components/Footer/Footer";
import CourseTitle from "../components/CourseDetail/CourseTitle";
import ProgressBar from "../components/CourseDetail/CourseTracklist/ProgressBar";
import Subject from "../components/CourseDetail/CourseTracklist/Subject";
import Card from "../components/CourseCard/Card";

import uiux from "../assets/img/uiux.jpg"

import { useNavigate } from "react-router-dom"
import { getCourses } from "../api/servicesApi";

const CourseDetail = () => {
    const [course, setCourse] = useState([])
    const id = useSelector((state) => state.module.id)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const navigate = useNavigate()

    useEffect(() => {
        getCourses()
        .then((res) => {
            const response = res.data.data.filter((item) => item.id === id)[0]
            setCourse(response)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <section>
            <div className="bg-LIGHTBLUE px-20 py-10">
                <button className="flex justify-center items-center gap-4">
                    <Icon icon="ph:arrow-left-bold" className="text-2xl" onClick={() => history.back()} />
                    <p className="font-bold text-lg">Kelas Lainnya</p>
                </button>
                <div className="float-right w-1/3 rounded-2xl bg-white px-8 py-5" style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
                    <div className="flex items-center justify-between mb-3">
                        <h1 className="text-lg font-bold">Materi Belajar</h1>
                        <ProgressBar
                            width="50%"
                            complete={"50% Complete"}
                        />
                    </div>
                    <div className="pt-2 pb-4">
                        <div className="flex justify-between mb-2">
                            <p className="text-DARKBLUE05 font-bold text-sm">Chapter 1 - Pendahuluan</p>
                            <p className="text-DARKBLUE03 font-bold text-sm">60 Menit</p>
                        </div>
                        <div className="flex justify-between items-center my-2">
                            <Subject
                                number={"1."}
                                subject={"Tujuan Mengikuti Kelas Design System"}
                            />
                            <Icon icon="icon-park-solid:play" className="text-2xl text-SUCCESS" />
                        </div>
                        <hr />
                        <div className="flex justify-between items-center my-2">
                            <Subject
                                number={"2."}
                                subject={"Pengenalan Design System"}
                            />
                            <Icon icon="icon-park-solid:play" className="text-2xl text-SUCCESS" />
                        </div>
                        <hr />
                        <div className="flex justify-between items-center my-2">
                            <div className="flex items-center justify-center gap-2">
                                <Subject
                                    number={"3."}
                                    subject={"Contoh Membangun Design System"}
                                />
                            </div>
                            <Icon icon="icon-park-solid:play" className="text-2xl text-SUCCESS" />
                        </div>
                    </div>
                    <div className="pt-2">
                        <div className="flex justify-between mb-2">
                            <p className="text-DARKBLUE05 font-bold text-sm">Chapter 2 - Memulai Desain</p>
                            <p className="text-DARKBLUE03 font-bold text-sm">120 Menit</p>
                        </div>
                        <div className="flex justify-between items-center my-2">
                            <div className="flex items-center justify-center gap-2">
                                <Subject
                                    number={"4."}
                                    subject={"Color Palette"}
                                />
                            </div>
                            <button onClick={handleOpen}>
                                <Icon icon="bxs:lock" className="text-2xl text-LIGHTGREY" />
                            </button>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center my-2">
                            <Subject
                                number={"5."}
                                subject={"Typography, Layout dan Grid"}
                            />
                            <Icon icon="bxs:lock" className="text-2xl text-LIGHTGREY" />
                        </div>
                        <hr />
                        <div className="flex justify-between items-center my-2">
                            <Subject
                                number={"6."}
                                subject={"Membuat Components"}
                            />
                            <Icon icon="bxs:lock" className="text-2xl text-LIGHTGREY" />
                        </div>
                        <hr />
                        <div className="flex justify-between items-center my-2">
                            <Subject
                                number={"7."}
                                subject={"Membuat Components"}
                            />
                            <Icon icon="bxs:lock" className="text-2xl text-LIGHTGREY" />
                        </div>
                        <hr />
                        <div className="flex justify-between items-center my-2">
                            <Subject
                                number={"8."}
                                subject={"Membuat Components"}
                            />
                            <Icon icon="bxs:lock" className="text-2xl text-LIGHTGREY" />
                        </div>
                        <hr />
                        <div className="flex justify-between items-center my-2">
                            <Subject
                                number={"9."}
                                subject={"Membuat Components"}
                            />
                            <Icon icon="bxs:lock" className="text-2xl text-LIGHTGREY" />
                        </div>
                        <hr />
                        <div className="flex justify-between items-center my-2">
                            <Subject
                                number={"10."}
                                subject={"Membuat Components"}
                            />
                            <Icon icon="bxs:lock" className="text-2xl text-LIGHTGREY" />
                        </div>
                        <hr />
                        <div className="flex justify-between items-center my-2">
                            <Subject
                                number={"11."}
                                subject={"Membuat Asset"}
                            />
                            <Icon icon="bxs:lock" className="text-2xl text-LIGHTGREY" />
                        </div>
                    </div>
                </div>
                <CourseTitle
                    course={course.category?.title}
                    rating={course.rating}
                    topic={course.title}
                    author={course.authorBy}
                    level={course.level}
                    // module={course.module}
                    time={"120 Minute"}
                />
            </div>
            <div className="px-20 py-10">
                <div className="px-10">
                    <div className="relative w-[700px] h-[327px] bg-DARKGREY02 rounded-3xl flex flex-col justify-center">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="bg-DARKBLUE05 rounded-full w-16 h-16 flex items-center justify-center">
                                <Icon icon="fluent:filmstrip-play-24-regular" className="text-white text-4xl" />
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-4 flex gap-2">
                            <div className="bg-white rounded-full px-4 py-1">
                                <p className="text-DARKBLUE03 font-medium">Kelas Lainnya</p>
                            </div>
                            <div className="bg-DARKBLUE05 rounded-full px-4 py-1">
                                <p className="text-white font-medium">Next</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-10">
                        <h1 className="font-bold text-2xl mb-2">Tentang Kelas</h1>
                        <div className="w-[690px]">
                            <p className="text-justify indent-10 mb-4">Design system adalah kumpulan komponen design, code, ataupun dokumentasi yang dapat digunakan sebagai
                                panduan utama yang memunginkan designer serta developer memiliki lebih banyak kontrol atas berbagai platform. Dengan hadirnya
                                design system, dapat menjaga konsistensi tampilan user interface dan meningkatkan user experience menjadi lebih baik. Di sisi bisnis,
                                design system sangat berguna dalam menghemat waktu dan biaya ketika mengembangkan suatu produk.
                            </p>
                            <p className="text-justify indent-10 mb-4">
                                Bersama mentor XXX, kita akan mempelajari design system dari mulai manfaat, alur kerja pembuatannya, tools yang digunakan, hingga
                                pada akhirnya, kita akan membuat MVP dari design system. Selain itu, mentor juga akan menjelaskan berbagai resource yang dibutuhkan
                                untuk mencari inspirasi mengenai design system.
                            </p>
                            <p className="text-justify indent-10 mb-4">
                                Kelas ini sesuai untuk Anda yang ingin memahami apa itu design system. Tidak hanya ditujukan untuk UI/UX Designer ataupun Developer,
                                kelas ini sangat sesuai untuk stakeholder lain agar dapat memudahkan tim dalam bekerja sama. Yuk segera daftar dan kami tunggu di kelas ya!
                            </p>
                        </div>
                        <h1 className="font-bold text-2xl mb-2">Kelas Ini Ditujukan Untuk?</h1>
                        <ol className="list-decimal list-inside">
                            <li className="py-2">Anda yang ingin memahami poin penting design system</li>
                            <li className="py-2">Anda yang ingin membantu perusahaan lebih optimal dalam membuat design produk</li>
                            <li className="py-2">Anda yang ingin latihan membangun design system</li>
                        </ol>
                    </div>
                </div>
            </div>
            <Dialog open={open} handler={handleOpen}>
                <div className="flex justify-end">
                    <button className="px-2 py-2" onClick={handleOpen}>
                        <Icon icon="material-symbols:close" className="text-2xl" />
                    </button>
                </div>
                <DialogHeader className="grid place-content-center py-5">
                    <Typography variant="h3" className="text-center">
                        Selangkah lagi menuju
                    </Typography>
                    <Typography variant="h3" className="text-center text-DARKBLUE05">
                        Kelas Premium
                    </Typography>
                </DialogHeader>
                <DialogBody className="grid place-items-center gap-4">
                    <Card 
                        picture={course.category?.image}
                        course={course.category?.title}
                        rating={course.rating}
                        topic={course.title}
                        author={course.authorBy}
                        level={course.level}
                        module={"10 Modul"}
                        time={"120 Menit"}
                        price={course.price} />

                    <button className="mt-6 w-80 mb-4" onClick={() => navigate("/payment")}>
                        <div className="bg-DARKBLUE05 rounded-full py-3 flex justify-center items-center gap-2">
                            <p className="text-white font-bold">Beli Sekarang</p>
                            <Icon icon="carbon:next-filled" className="text-white text-2xl" />
                        </div>
                    </button>
                </DialogBody>
            </Dialog>
            <Footer />
        </section>
    )
}

export default CourseDetail