import { logout } from "../firebase";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from "./Icon";
import { useSelector } from "react-redux";
import classNames from "classnames";
import Search from "./Search";

function Header() {
  const user = useSelector(state => state.auth.user)
  return (
    <header className="bg-white border-b border-gray-300">
      <div className="flex items-center justify-between h-[60px] container mx-auto">
        <Link to="/">
          <img className="h-12" alt="bulunamadı" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"/>
        </Link>
        <Search/>
        <nav className="flex items-center gap-x-5">
          
          <div className="bg-[#e4e6eb] w-10 h-10 items-center justify-center flex rounded-full">
            <NavLink to="/message">
          {({isActive}) => isActive ? <Icon name="direct-message-filled" size={24}/> : <Icon name="direct-message" size={20}/>}
          </NavLink>
          </div>
          <div className="flex h-10 w-10 bg-[#e4e6eb] items-center justify-center  rounded-full">
            <NavLink to="/notification">
            {({isActive}) => isActive ? <Icon name="notification-filled" size={24}/> : <Icon name="notification" size={20}/>}
          </NavLink>
          </div>
          
            <NavLink to={`/${user.username}`}>
              {({isActive}) => <img alt="" src={user.photoURL || "/no-avatar.jpg"} className={classNames({
                "w-10 h-10 rounded-full": true,
                "ring-1 ring-offset-1 ring-black" : isActive
              })} />}
            </NavLink>
            <button onClick={logout}>Logout</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
