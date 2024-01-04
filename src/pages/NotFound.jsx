// component
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const NotFound = () => {
  return (
    <section className="">
        <div className="w-full bg-LIGHTBLUE">
            <div className="grid place-content-center">
                <div className="w-full lg:w-[1024px] py-5">
                    <div className="h-screen text-center grid place-content-center">
                        <p className="font-bold">Oops! Halaman yang anda cari tidak ditemukan.</p>
                    </div>
                </div>
            </div>
        </div>
    <Footer />
    </section>
  )
};

export default NotFound;
