
import { login } from "../firebase";
import { Field, Form, Formik } from "formik";
import React, {  } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import * as Yup from "yup";
import { useSelector } from "react-redux";

function Deneme() {
    const user = useSelector(state => state.auth.user);
    console.log(user)
    const location = useLocation();

    const initialValues = {
        email: "",
        password: "",
      };
    
      const validationSchema = Yup.object({
        email: Yup.string()
          .email("Geçerli bir e-posta adresi giriniz")
          .required("E-posta alanı zorunludur"),
        password: Yup.string().required("Parola alanı zorunludur"),
      });
      
      if (user) {
		return <Navigate to={location.state?.return_url || '/'} replace={true} />
	}
      const onSubmit = async (values, actions) => {
		await login(values.email, values.password)
	}
  
  return (
    <div>
      <div className="justify-center grid bg-[#f0f2f5] text-center items-center w-[1583px] h-[640px]">
        <div className="items-center justify-center flex mt-10">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            className="w-[240px] items-center justify-center "
            alt="foto yok"
          />
        </div>
        <div className="w-[398px] h-[314.75px] bg-white rounded-md m-1 px-4">
          <div className="text-lg text-[#1C1E21] justify-center text-center font-normal leading-[22px] py-6 px-4">
            Facebook'a Giriş Yap
          </div>
          <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
  
            <Form>
            
              <label className="relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400">
                <div className=" bg-white w-[364px] h-[52px] text-slate-900 px-4 py-[14px]">
                  <Field
                    className="text-slate-800 w-[300px] h-[22px] border-none px-2 outline-none  bg-transparent "
                    name="email"
                    type="email"
                    id="email"
                    placeholder="E-posta veya Telefon Numarası"
                  />
                </div>
              </label>
              <label className=" flex slate-900 border rounded-sm focus-within:border-gray-400 my-3">
                <div className="bg-white w-[364px] h-[52px] text-slate-900 px-4 py-[14px]">
                  <Field
                    className="text-slate-800 w-[300px] h-[22px]  px-2 outline-none  bg-transparent  "
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Şifre"
                  />
                </div>
              </label>

              <button
                type="submit"
                className="cursor-pointer bg-[#1877f2] text-white w-[364px] h-12 rounded-md text-xl text-center font-bold m-2"
              >
                Giriş Yap
              </button>
            </Form>
          </Formik>

          <div className="text-center py-[12px] px-[18px] text-sm font-sans font-normal text-[#1877f2] cursor-pointer leading-3 ">
            
            <Link to="/auth/forgetpassword" className="font-normal text-[#1877f2]">
              Hesabını mı unuttun? 
            </Link>{" "}
            <Link to="/auth/register" className="font-normal text-[#1877f2]">
              Facebook'a Kaydol
            </Link>
          </div>
        </div>
        <div className="h-[650px]"> </div>
      </div>
    
    </div>
  );
}

export default Deneme;

