import React from 'react'
import { Link, NavLink } from 'react-router-dom'



function Header() {
  return (
    <header className="bg-white border-b border-gray-300">
      <div className="flex items-center justify-between h-[60px] container mx-auto">
        <Link to="/">
          <img className="h-12" alt="bulunamadı" src={"https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"}></img>
        </Link>
       
        <nav className="flex items-center gap-x-1 m-4 p-4">
        <label className=" w-[196px] h-[42px] flex bg-gray-50 border rounded-md focus-within:border-gray-400">
                <div className=" bg-white w-[196px] h-[42px] border rounded-md border-slate-300 text-slate-900">
                  <input
                    className="text-slate-800 w-[188px] h-[40px] border-none px-2 pb-1 outline-none  bg-transparent "
                    name="email"
                    id="email"
                    placeholder="E-posta veya telefon"
                  />
                </div>
              </label>
              <label className=" w-[196px] h-[42px] flex bg-gray-50 border rounded-md focus-within:border-gray-400">
                <div className=" bg-white w-[196px] h-[42px] border rounded-md border-slate-300 text-slate-900">
                  <input
                    className="text-slate-800 w-[188px] h-[40px] border-none px-2 pb-1 outline-none  bg-transparent "
                    name="password"
                    id="password"
                    placeholder="Şifre"
                  />
                </div>
              </label>
              <button
              type="submit"
              className="cursor-pointer bg-[#1877f2] text-white w-[89px] h-10 rounded-md text-[15px] text-center font-bold m-2" >Giriş Yap</button>
          <NavLink to="/auth/forgetpassword" className="text-[#216fdb] text-[15px]">
           Hesabını mı Unuttun?
          </NavLink>
         
           
            
        </nav>
      </div>
    </header>
  )
}

export default Header
