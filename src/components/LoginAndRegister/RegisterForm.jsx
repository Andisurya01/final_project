import React, { useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../lib/constants";
import { Icon } from '@iconify/react';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  
  const register = async () => {
    try {
      const response = await axios.post(
        `${SERVER_URL}/auth/register`,
        JSON.stringify({ name, email, phone, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        
        navigate("/Verifikasi", {
          state: { formData: { name, email, phone, password } },
        });
        localStorage.setItem('email' , email)
      } else {
        console.log("Registrasi gagal. Kode status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="" data-testid="register-form">
      <div className="">
        <h1 className="font-bold pb-6 text-2xl text-DARKBLUE05">Daftar</h1>
        <div className="pb-4">
          <label className="block pb-2 text-xs">Nama</label>
          <input
            type="text"
            name="name"
            placeholder="Nama Lengkap"
            className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            data-testid="namaLengkap"
          />
        </div>
        <div className="pb-4">
          <label className="block pb-2 text-xs">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Contoh: johndee@gmail.com"
            className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="email"
          />
        </div>
        <div className="pb-4">
          <label className="block pb-2 text-xs">Nomor Telepon</label>
          <input
            type="text"
            name="numberPhone"
            placeholder="+62 . "
            className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            data-testid="notelp"
          />
        </div>
        <div className="pb-4">
          <label className="block pb-2 text-xs">Buat Password</label>
          <div className="flex border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full">
          <input
            type={showPass ? 'text' : "password"}
            name="password"
            placeholder="Buat Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password"
            className="w-full mr-2 focus:outline-none focus:ring-0 text-sm bg-transparent"
          />
          <Icon onClick={()=>{setShowPass(!showPass)}} icon="lucide:eye" className='text-DARKGREY text-2xl'/>
          </div>
        </div>
        <Button
          warna={"bg-DARKBLUE05"}
          title={"Daftar"}
          onClick={register}
          idtest={"register"}
        ></Button>
        <p className="text-sm pt-12 text-center mb-20 lg:mb-0">
          Sudah punya akun?{" "}
          <button
            className="text-DARKBLUE05 font-bold"
            onClick={() => navigate("/Login")}
            data-testid="buttonLogin"
          >
            {" "}
            Masuk di sini
          </button>
        </p>
      </div>
    </section>
  );
};

export default RegisterForm;
