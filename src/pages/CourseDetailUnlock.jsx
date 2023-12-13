import React from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    Typography,
  } from "@material-tailwind/react";

import { Icon } from '@iconify/react';
import Footer from "../components/Footer/Footer";
import CourseTitle from "../components/CourseDetail/CourseTitle";
import ProgressBar from "../components/CourseDetail/CourseTracklist/ProgressBar";
import Subject from "../components/CourseDetail/CourseTracklist/Subject";

import illustration from "../assets/img/illustration2.png"
import AnimatedButton from "../components/Button/AnimatedButton";

import { useNavigate } from "react-router-dom"

const CourseDetailUnlock = () => {
    const [open, setOpen] = React.useState(1);
 
    const handleOpen = () => setOpen(!open)

    const navigate = useNavigate()

    return (
        <section>
            <Dialog open={open} handler={handleOpen}>
                <div className="flex justify-end">
                    <button className="px-2 py-2" onClick={handleOpen}>
                        <Icon icon="material-symbols:close" className="text-3xl"/>
                    </button>
                </div>
                <DialogHeader className="grid place-content-center">
                    <Typography variant="h3" className="text-center text-DARKBLUE05">
                        Onboarding...
                    </Typography>
                </DialogHeader>
                <DialogBody className="grid place-items-center gap-4">
                    <img src={illustration} alt="" />
                    <p className="font-medium text-sm text-black">Persiapkan hal berikut untuk belajar yang maksimal:</p>
                    <ul className="text-sm text-black text-center">
                        <li className="mb-1">Mempunyai akun Figma atau Install Adobe XD</li>
                        <li className="mb-1">Menggunakan internet minimal kecepatan 2Mbps</li>
                        <li className="mb-1">Belajar di tempat yang nyaman</li>
                    </ul>
                    <AnimatedButton>
                        <button className="mt-6 w-80 mb-4" onClick={handleOpen}>
                            <div className="bg-DARKBLUE05 rounded-full py-3 flex justify-center items-center gap-2">
                                <p className="text-white font-bold">Ikuti Kelas</p>
                            </div>
                        </button>
                    </AnimatedButton>
                </DialogBody>
            </Dialog>
            <div className="bg-LIGHTBLUE h-[250px]">
                <div className="grid place-content-center">
                    <div className="h-[250px]">
                        <div className="w-[1024px] pt-10">
                            <button onClick={() => navigate("/courses")} className="flex justify-center items-center gap-4">
                                <Icon icon="ph:arrow-left-bold" className="text-xl" />
                                <p className="font-bold">Kelas Lainnya</p>
                            </button>
                            {/* sidebar tracker */}
                            <div className="float-right w-[400px] rounded-2xl bg-white px-5 py-5" style={{boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>
                                <div className="flex items-center justify-between mb-3">
                                    <h1 className="text-lg font-bold">Materi Belajar</h1>
                                    <ProgressBar 
                                    width="50%"
                                    complete={"50% Complete"}/>
                                </div>
                                <div className="pt-2 pb-4">
                                    <div className="flex justify-between mb-2">
                                        <p className="text-DARKBLUE05 font-bold text-sm">Chapter 1 - Pendahuluan</p>
                                        <p className="text-DARKBLUE03 font-bold text-sm">60 Menit</p>
                                    </div>
                                    <div className="flex justify-between items-center my-2">
                                        <Subject 
                                        number={"1."}
                                        subject={"Tujuan Mengikuti Kelas Design System"}/>
                                        <AnimatedButton>
                                            <Icon icon="icon-park-solid:play" className="text-2xl text-SUCCESS"/>
                                        </AnimatedButton>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between items-center my-2">
                                        <Subject 
                                        number={"2."}
                                        subject={"Pengenalan Design System"} />
                                        <AnimatedButton>
                                            <Icon icon="icon-park-solid:play" className="text-2xl text-SUCCESS" />
                                        </AnimatedButton>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between items-center my-2">
                                        <div className="flex items-center justify-center gap-2">
                                            <Subject 
                                            number={"3."}
                                            subject={"Contoh Membangun Design System"}/>
                                        </div>
                                        <AnimatedButton>
                                            <Icon icon="icon-park-solid:play" className="text-2xl text-SUCCESS" />
                                        </AnimatedButton>
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
                                            subject={"Color Palette"}/>
                                        </div>
                                        <AnimatedButton>
                                            <button onClick={handleOpen}>
                                                <Icon icon="bxs:lock" className="text-2xl text-LIGHTGREY"/>
                                            </button>
                                        </AnimatedButton>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between items-center my-2">
                                        <Subject 
                                        number={"5."}
                                        subject={"Typography, Layout dan Grid"} />
                                        <AnimatedButton>
                                            <button>
                                                <Icon icon="bxs:lock" className="text-2xl text-LIGHTGREY"/>
                                            </button>
                                        </AnimatedButton>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between items-center my-2">
                                        <Subject 
                                        number={"6."}
                                        subject={"Membuat Components"}/>
                                        <AnimatedButton>
                                            <button>
                                                <Icon icon="bxs:lock" className="text-2xl text-LIGHTGREY"/>
                                            </button>
                                        </AnimatedButton>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between items-center my-2">
                                        <Subject 
                                        number={"7."}
                                        subject={"Membuat Asset"}/>
                                        <AnimatedButton>
                                            <button>
                                                <Icon icon="bxs:lock" className="text-2xl text-LIGHTGREY"/>
                                            </button>
                                        </AnimatedButton>
                                    </div>
                                </div>
                            </div>
                            <CourseTitle 
                            course={"UI/UX Design"}
                            rating={"5.0"}
                            topic={"Lorem ipsum"}
                            author={"Simon Doe"}
                            level={"Beginner Level"}
                            module={"5 Module"}
                            time={"120 Minute"}/>      
                        </div>
                    </div>
                    <div className="w-[600px] pt-10">
                        <div className="relative w-[600px] h-[327px] bg-DARKGREY02 rounded-3xl flex flex-col justify-center">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="bg-DARKBLUE05 rounded-full w-16 h-16 flex items-center justify-center">
                                    <Icon icon="fluent:filmstrip-play-24-regular" className="text-white text-4xl"/>
                                </div>
                            </div>
                            <div className="absolute bottom-4 right-4 flex gap-2">
                                <AnimatedButton>
                                    <div className="bg-white rounded-full px-4 py-1">
                                        <p className="text-DARKBLUE03 font-medium">Kelas Lainnya</p>
                                    </div>
                                </AnimatedButton>
                                <AnimatedButton>
                                    <div className="bg-DARKBLUE05 rounded-full px-4 py-1">
                                        <p className="text-white font-medium">Next</p>
                                    </div>
                                </AnimatedButton>
                            </div>
                        </div>
                        <div className="py-10">
                            <h1 className="font-bold text-2xl mb-2">Tentang Kelas</h1>
                            <div className="w-[600px]">
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
                <Footer />
            </div>
        </section>
    )
}

export default CourseDetailUnlock