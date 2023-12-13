import LoginForm from "../components/LoginAndRegister/LoginForm";
import logo from "../assets/img/craftiq.png"

const Login = () => {
  return (
    <section className="mx-auto">
      <div className="grid grid-cols-12 ">
        <div className="col-span-7 my-auto  px-40">
          <LoginForm />
        </div>
        <div className="col-span-5 bg-DARKBLUE05 h-screen grid place-content-center">
          <div className="flex items-center justify-center">
            <img src={logo} alt="" style={{width: "50%"}} className=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
