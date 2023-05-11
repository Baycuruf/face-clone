import React, { useState } from "react";
import { update, auth,updateDataInFirestore } from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { setUser } from "store/auth";

function UpdateProfile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [full_name, setFull_name] = useState(user.full_name || "");
  const [avatar, setAvatar] = useState(user.photoURL || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await update({
      full_name,
      photoURL: avatar,
      followers: [],
          following: [],
          notifications: [],
          website: "",
          bio: "",
          phoneNumber: "",
          gender:user.gender,
          day:user.day,
          month:user.month,
          year:user.year,
          posts: 0
    });
    await updateDataInFirestore({
      full_name,
      photoURL: avatar,
      username:user.username,
      followers: [],
          following: [],
          notifications: [],
          website: "",
          bio: "",
          phoneNumber: "",
          gender:user.gender,
          day:user.day,
          month:user.month,
          year:user.year,
          posts: 0
    });
    dispatch(
      setUser({
        full_name: user.full_name,
        username:user.username,
        email: user.email,
        emailVerified: auth.currentUser.emailVerified,
        photoURL: user.photoURL,
        uid: auth.currentUser.uid,
      })
    );
  };

  return (
    <div>
      <form
        className="grid gap-y-4 py-4 max-w-xl mx-auto text-black"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-bold mb-4 text-black">Update Profile</h1>
        <div>
          <label className="block text-sm font-medium text-black">Kullanıcı Adı:{user.full_name}</label>
          <input
            type="text"
            placeholder="Kullanıcı adı"
            className="shadow-sm focus:ring_primary focus:border-primary block w-full sm:text-sm border-gma"
            value={full_name}
            onChange={(e) => setFull_name(e.target.value)}
          ></input>
        </div>

        <div>
          <button
            className="bg-black cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Güncelle
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-black">Profil Fotoğrafı:{<img alt="fotoğraf bulunamadı" src={user.photoURL}/>}</label>
          <input
            type="text"
            placeholder="Avatarı Güncelle"
            className="shadow-sm focus:ring_primary focus:border-primary block w-full sm:text-sm border-gma"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          ></input>
        </div>

        <div>
          <button
            className="bg-black cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Güncelle
          </button>
        </div>
      </form>
      <Link to={`/${user.username}/resetpassword`}>
        <button className="bg-primary cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed text-black font-bold py-2 px-4 rounded">
          Parolayı Güncelle
        </button>
      </Link>
    </div>
  );
}

export default UpdateProfile;
