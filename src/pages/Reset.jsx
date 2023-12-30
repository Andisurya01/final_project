import React from "react";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import logo from "../assets/img/craftiq.png";
import logo2 from "../assets/img/color_craftiq.png";
const Reset = () => {
  return (
    <section className="mx-auto">
      <div className="lg:hidden grid place-content-center m-20">
        <div className="w-[305.3px] h-[87.7px]">
          <img src={logo2} data-testid="logo-2" />
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-12">
        <div className="lg:col-span-7 lg:my-auto lg:px-40 px-10">
          <ResetPassword />
        </div>
        <div className="hidden col-span-5 bg-DARKBLUE05 h-screen lg:grid place-content-center">
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt=""
              style={{ width: "50%" }}
              className=""
              data-testid="logo-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Reset;
