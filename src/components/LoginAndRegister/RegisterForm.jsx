import Button from "../Button/Button"
import {useNavigate} from "react-router-dom"

const RegisterForm = () => {
    const navigate = useNavigate()
    return (
        <section className="">
            <div className="">
                <h1 className="font-bold pb-6 text-2xl text-DARKBLUE05">Daftar</h1>
                <div className="pb-4">
                    <label className="block pb-2 text-xs">Nama</label>
                    <input type="text" name="name" placeholder="Nama Lengkap" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full"/>
                </div>
                <div className="pb-4">
                    <label className="block pb-2 text-xs">Email</label>
                    <input type="email" name="email" placeholder="Contoh: johndee@gmail.com" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full"/>
                </div>
                <div className="pb-4">
                    <label className="block pb-2 text-xs">Nomor Telepon</label>
                    <input type="text" name="numberPhone" placeholder="+62 . " className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full"/>
                </div>
                <div className="pb-4">
                    <label className="block pb-2 text-xs">Buat Password</label>
                    <input type="password" name="password" placeholder="Buat Password" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full"/>
                </div>
                <Button warna={"bg-DARKBLUE05"} title={"Daftar"}></Button>
                <p className="text-sm pt-12 text-center">Sudah punya akun? <button className="text-DARKBLUE05 font-bold" onClick={() => navigate("/Login")}> Masuk di sini</button></p>
            </div>
        </section>
    )
}

export default RegisterForm