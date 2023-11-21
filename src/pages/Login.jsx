import LoginForm from "../components/LoginAndRegister/LoginForm";

const Login = () => {
    return (
        <section className="mx-auto">
            <div className="grid grid-cols-12 ">
                <div className="col-span-7 my-auto  px-80">
                    <LoginForm />
                </div>
                <div className="col-span-5 bg-DARKBLUE05 h-screen">

                </div>
            </div>
        </section>
    )
}

export default Login;