import ButtonReset from "../Button/ButtonReset";
import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import TitleReset from "../InputPassword/TitleReset";
import AllertReset from "../Allert/AllertReset";
const Tautan = () => {
  const [warningMailRed, setWarningMailRed] = useState("hidden");
  const [warningMailGreen, setWarningMailGreen] = useState("hidden");
  const dataMail = "contoh@gmail.com";
  const ipMail = useRef(null);
  const sendMail = () => {
    if (ipMail.current.value === dataMail) {
      setWarningMailGreen("block");
      setWarningMailRed("hidden");
    } else {
      setWarningMailRed("block");
      setWarningMailGreen("hidden");
    }
  };
  
  return (
    <section className="relative">
      <div>  
        <TitleReset titleMessage={"Reset Password"} />
        <div className="pb-4 ">
          <label className="text-sm/[6px] font-normal pb-1.5">
            Masukan Email Untuk Menerima Tautan
          </label>
          <input
            type="email"
            className="border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full"
            ref={ipMail}
            required
          />
        </div>
          <ButtonReset className="w-full" title={"Kirim"} onClick={sendMail}></ButtonReset>
        <div className={`${warningMailRed} ml-LEFTWR mt-8 `}>
          <AllertReset type="warning" message={"Email tidak terdaftar"} />
        </div>
        <div className={`${warningMailGreen} ml-LEFTWG mt-8 `}>
          <AllertReset
            type="success"
            message={"buka email untuk melihat tautan reset"}
          />
        </div>
      </div>
    </section>
  );
};
export default Tautan;
