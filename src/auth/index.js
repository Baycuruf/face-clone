import Icon from "components/Icon";
import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <Outlet />

      <div className="w-[1583] h-[137px] grid items-center justify-center mt-5">
        <ul className="w-[980px] h-[28px] flex gap-x-2 text-xs text-[#737373] ">
          <li>Türkçe</li>
          <li>Kurdî (Kurmancî)</li>
          <li>العربية</li>
          <li>English (UK)</li>
          <li>Zaza</li>
          <li>Deutsch</li>
          <li>Русский</li>
          <li>Français (France)</li>
          <li>Español</li>
          <li>Português (Brasil)</li>
          <li>
            <div className="border border-gray-300 bg-[#f5f6f7] flex items-center justify-center w-[30px] h-[20px]">
              <Icon name="add" size={12} />
            </div>
          </li>
        </ul>
        {/* ÇİZGİ */}
        <div className="flex w-[917px] h-[9px] items-center justify-center text-center">
          <div className="h-px bg-gray-300 flex-1" />
          <div className="h-px bg-gray-300 flex-1" />
        </div>
        <ul className="w-[1000px] h-[57.56px] text-xs text-[#737373] flex flex-wrap gap-x-5 ">
          <li>Kaydol</li>
          <li>Giriş Yap</li>
          <li>Messenger</li>
          <li>Facebook Lite</li>
          <li>Watch</li>
          <li>Yerler</li>
          <li>Oyunlar</li>
          <li>Marketplace</li>
          <li>Meta Pay</li>
          <li>Meta Mağazası</li>
          <li>Meta Quest</li>
          <li>Instagram</li>
          <li>Bulletin</li>
          <li>Bağış Kampanyaları</li>
          <li>Hizmetler</li>
          <li>Oy Kullanma Bilgi Merkezi</li>
          <li>Gizlilik İlkesi</li>
          <li>Gizlilik Merkezi</li>
          <li>Gruplar</li>
          <li>Hakkımızda</li>
          <li>Reklam Oluştur</li>
          <li>Sayfa Oluştur</li>
          <li>Geliştiriciler</li>
          <li>Kariyer Olanakları</li>
          <li>Çerezler</li>
          <li>Ad Choices hakkında bilgi alın.</li>
          <li>Koşullar</li>
          <li>Yardım</li>
          <li>Kişi Yükleme ve Hesabı Olmayan Kişiler</li>
        </ul>
        <div className="text-xs text-[#737373] mt-5">Meta © 2023</div>
      </div>
    </>
  );
}

export default AuthLayout;
