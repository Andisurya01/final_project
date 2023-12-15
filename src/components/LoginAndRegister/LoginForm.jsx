import Button from "../Button/Button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { postLogin } from "../../api/servicesApi"

const LoginForm = () => {
    const [emailOrPhone, setEmailOrPhone] = useState("")
    const [password, setPassword] = useState("")
    const [isLoginDone, setIsLoginDone] = useState(false)
    const navigate = useNavigate()

    const onSubmit = async () => {
        try {
            setIsLoginDone(false)
            const payload = {
                emailOrPhone,
                password
            }
            const data = await postLogin(payload)
            document.cookie = `token=${data.data.data.accessToken}`
            console.log(payload);
            setEmailOrPhone("")
            setPassword("")
            navigate("/home")
            window.location.reload();
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoginDone(true)
        }
    }
    return (
        <section className="">
            <div className="" onSubmit={onSubmit}>
                <h1 className="font-bold pb-6 text-2xl text-DARKBLUE05">Masuk</h1>
                <div className="pb-4">
                    <label className="block pb-2 text-xs">Email/No Telepon</label>
                    <input type="email" name="email" placeholder="Contoh: johndee@gmail.com" 
                    className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={emailOrPhone} onChange={(e)=> setEmailOrPhone(e.target.value)} />
                </div>
                <div className="pb-4">
                    <div>
                        <label className="float-left pb-2 text-xs">Password</label>
                        <label className="float-right text-xs font-medium text-DARKBLUE05 cursor-pointer" onClick={() => navigate("/resetpassword")}>Lupa Kata Sandi</label>
                    </div>
                    <input type="password" name="password" placeholder="Masukkan Password" className=" border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <button type="button" className="w-full" onClick={
                    onSubmit
                }>
                    <Button warna={"bg-DARKBLUE05"} title={"Masuk"}></Button>
                </button>
                <p className="text-sm pt-12 text-center">Belum punya akun? <button className="text-DARKBLUE05 font-bold" onClick={() => navigate("/Register")}> Daftar di sini</button></p>
            </div>
        </section>
    )
}

export default LoginForm