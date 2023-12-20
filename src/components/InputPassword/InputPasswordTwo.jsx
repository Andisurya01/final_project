
import ButtonReset from "../Button/ButtonReset";
import AllertReset from "../Allert/AllertReset";
import { useState  , } from "react";
import { consumeUserApi } from "../../api/user";
import { useNavigate } from "react-router-dom";


const InputTwo = () => {

  const navigate =  useNavigate();

  const butt = async () => {
    const fieldPass = document.getElementById('fieldPass').value;
    const fieldPassValidation = document.getElementById('fieldPassValidation').value;

    const currentURL = window.location.href.toString();
    const urlParts = currentURL.split('/');
    const initToken = urlParts.indexOf('resetpassword') + 1;
    const token = urlParts[initToken];

    if(fieldPass === fieldPassValidation ){
        consumeUserApi.resetPasswordValidation( { password : fieldPassValidation } , token ).then(res => {
          if(res.status == 'OK'){
            console.log(res.message)
            navigate('login')
          }
        })
    }else{
      return false;
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
            id="fieldPass"
            type="password"
            className={` border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full`}
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
            id="fieldPassValidation"
            type="password"
            className={` border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full `}
            required
          />
        </div>
        <div className="mt-8">
          <ButtonReset title={"Simpan"} onClick={butt}></ButtonReset>
        </div>
        <div className={` ml-LEFT mt-8 `}>
          {/* <AllertReset type="warning" message={"Password minimal 8 karakter"} /> */}
        </div>
      </div>
    </div>
  );
};
export default InputTwo;
