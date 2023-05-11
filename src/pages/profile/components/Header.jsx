import React from "react";

function Header({ user }) {
  return (
    <header className="flex items-center px-24 gap-x-24 py-4 pb-10">
      <img
        alt=""
        src={user.photoURL}
        className="w-[150px] h-[150px] rounded-full"
      />
      <div>
        <div className="mb-4">
          <h1 className="text-[28px] font-light">
            {user.full_name} {user.username}
          </h1>
        </div>
        <nav className="flex items-center gap-x-10">
          <div>
            <span className="font-semibold">{user.posts}</span> gönderi
          </div>
          <div>
            <span className="font-semibold">{user.followers.length}</span>{" "}
            takipçi
          </div>
          <div>
            <span className="font-semibold">{user.following.length}</span> takip
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
