import Header from 'components/Header'
import React from 'react'

function ForgetPassword() {
  return (
    <div>
      <Header/>
      <div className='h-[436px] bg-[#e9ebee] items-center flex justify-center text-center'>
<div className='text-center rounded-md justify-center w-[500px] h-[276px] bg-white'>
  <h2 className='w-[500px] h-[60px] text-xl text-left p-4 font-bold '>Hesabını Bul</h2>
  <hr></hr>
  <div className='text-[#e9ebee] text-[17px] p-4 mb-8 text-left w-[464px] h-10 '>
  Hesabını aramak için lütfen e-posta adresini veya cep telefonu numaranı gir
  </div>
  <label className="  bg-zinc-50 border rounded-sm focus-within:border-gray-400">
               
                  <input
                    className="text-slate-800 mb-4 bg-white w-[462px]  border-slate-300 rounded-md border h-[52px]  px-2 outline-none bg-transparent "
                    name="email"
                    id="email"
                    placeholder="E-posta veya Telefon Numarası"
                  />
                
              </label>
              <hr></hr>
              <div className='flex justify-end'>
              <button
              type="submit"
              className="cursor-pointer bg-[#f5f6f7]  w-[70px] h-9 rounded-md text-base text-[#4b4f56] text-center font-semibold mt-4">İptal</button>
              <button
              type="submit"
              className="cursor-pointer bg-[#1877f2]  w-[70px] h-9 rounded-md text-base text-white text-center font-semibold m-4">Ara</button>
              </div>
</div>
      </div>
    </div>
  )
}

export default ForgetPassword
