import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { postLogin } from "../../api/servicesApi";
import AllertReset from "../Allert/AllertReset";
import setCookieValue from "../../api/setCookie";
import { Icon } from '@iconify/react';

const LoginForm = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [, setIsLoginDone] = useState(false);
  const [failMail, setFailMail] = useState(false);
  const [failPass, setFailPass] = useState(false);
  const [alertStatus, setAlertStatus] = useState(false);
  const [alertAction, setAlertAction] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAlertTime();
  });

  const setAlertTime = () => {
    if (alertAction) {
      setTimeout(() => {
        setAlertAction(false);
      }, 5000);
    }
  };

  const onSubmit = async () => {
    try {
      if (emailOrPhone == "" && password == "") {
        setFailMail(true);
        setFailPass(true);
        setAlertAction(true);
        setAlertStatus(false);
        setAlertMsg("Toloong Email dan Password Diisi !!");
        return false;
      }

      setIsLoginDone(false);
      setFailMail(false);
      setFailPass(false);
      const payload = {
        emailOrPhone,
        password,
      };
      const data = await postLogin(payload);

      if (data.response != null) {
        const msg = data.response.data.message;
        if (msg == "Wrong Password") {
          setFailPass(true);
          setAlertAction(true);
          setAlertStatus(false);
          setAlertMsg("Maaf, kata sandi salah");
        } else if (msg == "Email or Phone not Registered") {
          setFailMail(true);
          setAlertAction(true);
          setAlertStatus(false);
          setAlertMsg("Alamat email tidak terdaftar!");
        }
      } else {
        document.cookie = `token=${data.data.data.accessToken}`;
        setCookieValue('token',data.data.data.accessToken)
        setEmailOrPhone("");
        setPassword("");
        navigate("/");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoginDone(true);
    }
  };
  return (
    <section className="relative" data-testid="login-form">
      <div className="" onSubmit={onSubmit}>
        <h1 className="font-bold pb-6 text-2xl text-DARKBLUE05">Masuk</h1>
        <div className="pb-4">
          <label className="block pb-2 text-xs">Email/No Telepon</label>
          <input
            type="email"
            name="email"
            placeholder="Contoh: johndee@gmail.com"
            className={` ${
              failMail
                ? "border-2 border-WARNING "
                : "border-2 border-neutral-200"
            } border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full`}
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            data-testid="input-mail-phone"
          />
        </div>
        <div className="pb-4">
          <div>
            <label className="float-left pb-2 text-xs">Password</label>
            <label
              className="float-right text-xs font-medium text-DARKBLUE05 cursor-pointer"
              onClick={() => navigate("/resettautan")}
              data-testid="btn-resetpw"
            >
              Lupa Kata Sandi
            </label>
          </div>
          <div
          className={` ${
            failPass
              ? "border-2 border-WARNING "
              : "border-2 border-neutral-200"
          } flex border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full`}>
          <input
            type={showPass ? 'text' : "password"}
            name="password"
            placeholder="Masukkan Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="input-password"
            className="w-full mr-2 focus:outline-none focus:ring-0 text-sm bg-transparent"
          />
          <Icon onClick={()=>{setShowPass(!showPass)}} icon="lucide:eye" className='text-DARKGREY text-2xl'/>
          </div>
        </div>
        <button type="button" className="w-full" onClick={onSubmit}>
          <Button
            warna={"bg-DARKBLUE05"}
            title={"Masuk"}
            idtest={"login"}
          ></Button>
        </button>
        <p className="text-sm pt-12 text-center">
          Belum punya akun?{" "}
          <button
            className="text-DARKBLUE05 font-bold"
            onClick={() => navigate("/Register")}
            data-testid="button-register"
          >
            {" "}
            Daftar di sini
          </button>
        </p>
      </div>
      <div className="absolute w-[100%] flex justify-center">
        {alertAction ? (
          <div className="relative mt-[40px] ">
            <AllertReset
              message={alertMsg}
              type={alertStatus ? "success" : "warning"}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default LoginForm;
