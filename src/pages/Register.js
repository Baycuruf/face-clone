import { register } from "../firebase";
import soru from "../logo/soru.png";
import { Field, Form, Formik } from "formik";
import React, {  } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Register() {
  const initialValues = {
    full_name: "",
    username: "",
    email: "",
    password: "",
    day: "",
    month: "",
    year: "",
    gender: "",
  };

  const validationSchema = Yup.object({
    full_name: Yup.string().required("Ad alanı zorunludur"),
    username: Yup.string().required("Ad alanı zorunludur"),
    email: Yup.string()
      .email("Geçerli bir e-posta adresi giriniz")
      .required("E-posta alanı zorunludur"),
    password: Yup.string().required("Parola alanı zorunludur"),
  });

  // const onSubmit = (values) => {
  //   console.log(values);
  // };
  const navigate = useNavigate();
  const location = useLocation();
  const onSubmit = async (values, actions) => {
    const response = await register(values);
    if (response) {
      navigate(location.state?.return_url || "/", {
        replace: true,
      });
      window.location.reload();
    }
  };

  const renderDayOptions = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(<option key={i}>{i}</option>);
    }
    return days;
  };

  const renderOptions = (options) => {
    return options.map((option) => <option key={option}>{option}</option>);
  };

  const renderYearOptions = (startYear, endYear) => {
    const options = [];
    for (let year = startYear; year <= endYear; year++) {
      options.push(<option key={year}>{year}</option>);
    }
    return options;
  };
  return (
    <div className="h-full w-full flex flex-wrap overflow-auto items-center gap-x-8 justify-center bg-[#f0f2f5]">
      <div>
        <div className="flex items-center justify-center">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            className="w-[284px] items-center justify-center "
            alt="foto yok"
          />
        </div>

        <div className="w-[432px] h-[76px] bg-white p-1 rounded-md">
          <div className="w-[400px] h-[32px] text-2xl font-semibold text-center ">
            Yeni Bir Hesap Oluştur
          </div>
          <div className="w-[400px] h-[24px] text-base text-[#606770] text-center p-1">
            Hızlı ve kolaydır.
          </div>
        </div>
        <hr />
        <div className="w-[432px] h-[517px] bg-white p-1 flex  flex-wrap rounded-md">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="w-[432px] h-[517px] flex gap-x-2 flex-wrap p-4">
              <label
                htmlFor="full_name"
                className="flex w-[194px] h-[40px] slate-900 border rounded-sm focus-within:border-gray-400 "
              >
                <Field
                  className="text-slate-800 w-[194px] h-[40px] border-none px-2 outline-none  bg-transparent "
                  name="full_name"
                  type="text"
                  id="full_name"
                  placeholder="Adın"
                />
              </label>
              <label
                htmlFor="username"
                className="flex w-[194px] h-[40px] slate-900 border rounded-sm focus-within:border-gray-400 "
              >
                <Field
                  className="text-slate-800 w-[194px] h-[32px]  px-2 outline-none  bg-transparent  "
                  name="username"
                  type="text"
                  id="username"
                  placeholder="Soyadın"
                />
              </label>
              <label
                htmlFor="email"
                className="flex w-[399px] h-[40px] slate-900 border rounded-sm focus-within:border-gray-400 mt-2"
              >
                <Field
                  className="text-slate-800 w-[399px] h-[40px]  px-2 outline-none  bg-transparent  "
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Cep telefonu numarası veya e-posta"
                />
              </label>
              <label
                htmlFor="password"
                className="flex w-[399px] h-[40px] slate-900 border rounded-sm focus-within:border-gray-400 mt-2"
              >
                <Field
                  className="text-slate-800 w-[399px] h-[40px]  px-2 outline-none  bg-transparent  "
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Yeni şifre"
                />
              </label>
              <div className="w-[400px] h-[20px] flex text-xs text-[#606770] font-medium mt-2">
                Doğum Tarihi{" "}
                <img src={soru} className="h-3 w-3 m-1 " alt="bulunamadı" />
              </div>
              <label
                htmlFor="day"
                className="w-[125px] h-[36px] flex slate-900 rounded-sm border focus-within:border-gray-400 mt-1"
              >
                <Field
                  as="select"
                  name="day"
                  id="day"
                  className="border border-gray-200 w-[125px] h-[36px]  slate-900 rounded-sm  focus-within:border-gray-400 "
                >
                  {renderDayOptions()}
                </Field>
              </label>
              <label
                htmlFor="month"
                className="w-[125px] h-[36px] flex slate-900 rounded-none border focus-within:border-gray-400 mt-1"
              >
                <Field as="select" name="month" id="month" className="border border-gray-200 w-[125px] h-[36px]  slate-900 rounded-sm  focus-within:border-gray-400 ">
                  {renderOptions([
                    "Ocak",
                    "Şubat",
                    "Mart",
                    "Nisan",
                    "Mayıs",
                    "Haziran",
                    "Temmuz",
                    "Ağustos",
                    "Eylül",
                    "Ekim",
                    "Kasım",
                    "Aralık",
                  ])}
                </Field>
              </label>
              <label
                htmlFor="year"
                className="w-[125px] h-[36px] flex slate-900 rounded-none border focus-within:border-gray-400 mt-1"
              >
                <Field
                  as="select"
                  name="year"
                  id="year"
                  className="border border-gray-200 w-[125px] h-[36px]  slate-900 rounded-sm  focus-within:border-gray-400 "
                >
                  {renderYearOptions(1905, 2023)}
                </Field>
              </label>
              <div className="w-[400px] h-[20px] flex text-xs text-[#606770] font-medium mt-2">
                Cinsiyet{" "}
                <img src={soru} className="h-3 w-3 m-1 " alt="bulunamadı" />
              </div>
              <label
                htmlFor="radio"
                className="w-[126px] h-[36px] flex slate-900 rounded-none border focus-within:border-gray-400 mt-1 justify-center items-center p-2"
              >
                <span className="text-[#1c1e21] w-[126px] h-[36px]  slate-900 text-center items-center justify-center mt-2 mr-8 ">
                  Erkek
                </span>

                <Field
                  type="radio"
                  className="form-radio"
                  name="gender"
                  value="male"
                />
              </label>
              <label
                htmlFor="radio"
                className="w-[126px] h-[36px] flex slate-900 rounded-none border focus-within:border-gray-400 mt-1 justify-center items-center p-2"
              >
                <span className="text-[#1c1e21] w-[126px] h-[36px]  slate-900 text-center items-center justify-center mt-2 mr-8 ">
                  Kadın
                </span>
                <Field
                  type="radio"
                  className="form-radio"
                  name="gender"
                  value="female"
                />
              </label>
              <label
                htmlFor="radio"
                className="w-[126px] h-[36px] flex slate-900 rounded-none border focus-within:border-gray-400 mt-1 justify-center items-center p-2"
              >
                <span className=" text-[#1c1e21] w-[126px] h-[36px]  slate-900 text-center items-center justify-center mt-3 mr-8">
                  Özel
                </span>
                <Field
                  type="radio"
                  className="form-radio"
                  name="gender"
                  value="other"
                />
              </label>
              <div className="w-[400px] h-[29px] text-[11px] text-[#7777] mt-2">
                Hizmetimizi kullanan kişiler senin iletişim bilgilerini
                Facebook'a yüklemiş olabilir.
                <span className="text-[#385898]">Daha fazla bilgi al.</span>
              </div>
              <div className="w-[400px] h-[29px] text-[11px] text-[#7777] mt-2">
                Kaydol düğmesine tıklayarak,
                <span className="text-[#385898]">Koşullarımızı</span>,
                <span className="text-[#385898]">Gizlilik İlkemizi</span> ve
                <span className="text-[#385898]"> Çerezler İlkemizi</span>
                kabul etmiş olursun. Bizden SMS Bildirimleri alabilir ve bu
                bildirimleri istediğin zaman durdurabilirsin.
              </div>
              <div className="items-center justify-center text-center w-[400px] h-15 flex mt-4">
                <button
                  type="submit"
                  className="cursor-pointer bg-[#00a400] text-white w-[194px] h-9 rounded-md text-xl text-center items-center font-bold m-2"
                >
                  Kaydol
                </button>
              </div>
              <Link
                to="/"
                className=" w-[400px] h-10 text-[#1877f2] text-[17px] flex text-center justify-center items-center  mt-2"
              >
                Hesabın zaten var mı?
              </Link>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Register;
