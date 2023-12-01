import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import Navbar from "../components/Navbar/Navbar"
import { Icon } from '@iconify/react';
import amex from "../assets/img/amex.png"
import mc from "../assets/img/mc.png"
import paypal from "../assets/img/paypal.png"
import visa from "../assets/img/visa.png"
import uiux from "../assets/img/uiux.jpg"

import Footer from "../components/Footer/Footer"
import CardPayment from "../components/CourseCard/CardPayment"

import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
function Symbol({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

const Payment = () => {
    const [open, setOpen] = React.useState(0);
 
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const navigate = useNavigate()
 
    return (
        <section>
            <Navbar />
            <div className="bg-white px-20 py-10 h-48" style={{boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15"}}>
                <button className="flex justify-center items-center gap-4">
                    <Icon icon="ph:arrow-left-bold" className="text-2xl" />
                    <p className="font-bold text-lg">Kembali</p>
                </button>
                <div className="flex items-center justify-center">
                    <div className="rounded-xl bg-WARNING mt-10 py-3 w-[800px]">
                        <p className="text-white font-medium text-center">Selesaikan Pembayaran sampai 10 Maret 2023 12:00</p>
                    </div>
                </div>
            </div>
            <div className="px-20 py-10 flex justify-between">
                <div className="w-[600px]">
                    <Accordion open={open === 1} icon={<Symbol id={1} open={open} />}  className="mb-4 rounded-md bg-DARKGREY02" style={{boxShadow: "0px 3px 2px 0px rgba(0, 0, 0, 0.05)"}}>
                        <AccordionHeader
                        onClick={() => handleOpen(1)}
                        className={"border-b-0 px-4 text-white hover:!text-LIGHTBLUE"}
                        >
                        Bank Transfer
                        </AccordionHeader>
                        <AccordionBody className="px-12 py-8 text-base font-normal bg-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} icon={<Symbol id={2} open={open} />} className="rounded-md bg-DARKBLUE05" style={{boxShadow: "0px 3px 2px 0px rgba(0, 0, 0, 0.05)"}}>
                        <AccordionHeader
                        onClick={() => handleOpen(2)}
                        className={"border-b-0 px-4 text-white hover:!text-LIGHTBLUE"}
                        >
                        Credit Card
                        </AccordionHeader>
                        <AccordionBody className="px-12 py-8 text-base font-normal bg-white">
                            <div className="flex gap-4 items-center justify-center mb-10">
                                <img src={mc} alt="" />
                                <img src={visa} alt="" />
                                <img src={amex} alt="" />
                                <img src={paypal} alt="" />
                            </div>
                            <div className="flex items-center justify-center">
                                <div>
                                    <div className="mb-6">
                                        <p className="font-medium text-black mb-1">Card number</p>
                                        <input type="text" placeholder="4480 0000 0000 0000" className="focus:outline-none focus:ring-0 mb-1" />
                                        <hr className="w-80 h-0.5 bg-LIGHTGREY"/>
                                    </div>
                                    <div className="mb-6">
                                        <p className="font-medium text-black mb-1">Card holder name</p>
                                        <input type="text" placeholder="John Doe" className="focus:outline-none focus:ring-0 mb-1" />
                                        <hr className="w-80 h-0.5 bg-LIGHTGREY"/>
                                    </div>
                                    <div className="flex gap-3 mb-6">
                                        <div className="">
                                            <p className="font-medium text-black mb-1">CVV</p>
                                            <input type="text" placeholder="000" className="focus:outline-none focus:ring-0 mb-1" />
                                            <hr className="w-32 h-0.5 bg-LIGHTGREY"/>
                                        </div>
                                        <div className="">
                                            <p className="font-medium text-black mb-1">Expired date</p>
                                            <input type="text" placeholder="07/24" className="focus:outline-none focus:ring-0 mb-1" />
                                            <hr className="w-32 h-0.5 bg-LIGHTGREY"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AccordionBody>
                    </Accordion>
                </div>
                <div>
                    <div className="w-[400px] rounded-2xl border border-DARKBLUE05 py-6 px-8" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>
                        <h1 className="text-xl font-semibold mb-4">Pembayaran Kelas</h1>
                        <div className="flex items-center justify-center mb-4">
                            <CardPayment
                            picture={uiux}
                            course={"UI/UX Design"}
                            topic={"Intro to Basic of User Interaction"}
                            author={"Simon Doe"}
                            />
                        </div>
                        <div className="flex justify-between mb-10">
                            <div>
                                <p className="font-medium text-sm">Harga</p>
                                <p className="font-semibold text-sm">Rp 349,000</p>
                            </div>
                            <div>
                                <p className="font-medium text-sm">PPN 11%</p>
                                <p className="font-semibold text-sm">Rp 38,390</p>
                            </div>
                            <div>
                                <p className="font-medium text-sm">Total Bayar</p>
                                <p className="font-semibold text-sm text-DARKBLUE05">Rp 387,390</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="flex items-center justify-center gap-2 bg-WARNING rounded-full w-80 py-3 px-6 text-center"
                            onClick={() => navigate("/payment/success")}>
                                <p className="text-white text-sm font-medium">Bayar dan Ikuti Kelas Selamanya</p>
                                <Icon icon="carbon:next-filled" className="text-white text-2xl"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    )
}

export default Payment