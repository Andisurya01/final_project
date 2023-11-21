import Button from "../Button/Button"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
    const navigate = useNavigate()
    return (
        <section className="">
            <div className="">
                <h1 className="font-bold pb-6 text-2xl text-DARKBLUE05">Masuk</h1>
                <div className="pb-4">
                    <label className="block pb-2 text-xs">Email/No Telepon</label>
                    <input type="email" name="email" placeholder="Contoh: johndee@gmail.com" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" />
                </div>
                <div className="pb-4">
                    <div>
                        <label className="float-left pb-2 text-xs">Password</label>
                        <label className="float-right text-xs font-medium text-DARKBLUE05">Lupa Kata Sandi</label>
                    </div>
                    <input type="password" name="password" placeholder="Masukkan Password" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" />
                </div>
                <Button warna={"bg-DARKBLUE05"} title={"Masuk"}></Button>
                <p className="text-sm pt-12 text-center">Belum punya akun? <button className="text-DARKBLUE05 font-bold" onClick={() => navigate("/Register")}> Daftar di sini</button></p>
            </div>
        </section>
    )
}

export default LoginForm