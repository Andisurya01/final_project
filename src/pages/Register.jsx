import RegisterForm from "../components/LoginAndRegister/RegisterForm";

const Register = () => {
    return (
        <section className="mx-auto">
            <div className="grid grid-cols-12 ">
                <div className="col-span-7 my-auto  px-40">
                    <RegisterForm />
                </div>
                <div className="col-span-5 bg-DARKBLUE05 h-screen">

                </div>
            </div>
        </section>
    )
}

export default Register;