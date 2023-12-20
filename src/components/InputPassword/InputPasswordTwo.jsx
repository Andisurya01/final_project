import React, { useRef, useState } from "react";
import Eye from "../../assets/eye.svg";
import EyeSlash from "../../assets/eyeslash.svg";
import ButtonReset from "../Button/ButtonReset";
import AllertReset from "../Allert/AllertReset";
import axios from "axios";
import { SERVER_URL } from "../../lib/constants";

const InputTwo = () => {
  let inputShowHide = useRef(null);
  let inputShowHideO = useRef(null);
  const [warningRed, setWarningRed] = useState("hidden");
  const [warningRedTwo, setWarningRedTwo] = useState("hidden");
  const [successGreen, setSuccessGreen] = useState("hidden");
  const [inputOne, setInputOne] = useState("border-2");
  const [inputTwo, setInputTwo] = useState("border-2");

  const show = () => {
    inputShowHide.current.type = "text";
    setEyeHdTwo("hidden");
    setEyeShTwo("block");
  };
  const hide = () => {
    inputShowHide.current.type = "password";
    setEyeHdTwo("block");
    setEyeShTwo("hidden");
  };
  const sho = () => {
    inputShowHideO.current.type = "password";
    setEyeHdOne("block");
    setEyeShOne("hidden");
  };
  const hid = () => {
    inputShowHideO.current.type = "text";
    setEyeHdOne("hidden");
    setEyeShOne("block");
  };

  const butt = async () => {
    try {
      console.log({ email, password });
      const response = await axios.put(
        `${SERVER_URL}/auth/reset-password`,
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        console.log("reset password sukses!");
        setInputOne("border-2");
        setInputTwo("border-2");
        setSuccessGreen("block");
        setWarningRed("hidden");
      } else {
        console.log("Reset password gagal. Kode status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div>
      <div className="relative">
        <label className="text-xs font-normal pb-1.5">
          Masukan Password Baru
        </label>
        <div className="relative">
          <input
            type="password"
            ref={inputShowHideO}
            className={` border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full ${inputOne}`}
            required
          />
        </div>
      </div>
      <div className="mt-6">
        <label className="text-xs font-normal pb-1.5">
          Ulangi Password Baru
        </label>
        <div className="relative">
          <input
            type="password"
            ref={inputShowHide}
            className={` border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full ${inputTwo}`}
            required
          />
        </div>
        <div className="mt-8">
          <ButtonReset title={"Simpan"} onClick={butt}></ButtonReset>
        </div>
        <div className={`${warningRed} ml-LEFT mt-8 `}>
          <AllertReset type="warning" message={"Password minimal 8 karakter"} />
        </div>

        <div className={`${warningRedTwo} ml-LEFT mt-8 `}>
          <AllertReset
            type="warning"
            message={"Password dan konfirmasi password harus sama"}
          />
        </div>

        <div className={`${successGreen} ml-left mt-8 `}>
          <AllertReset type="success" message={"Reset password berhasil"} />
        </div>
      </div>
    </div>
  );
};
export default InputTwo;
