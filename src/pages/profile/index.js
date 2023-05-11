import Header from "./components/Header";
import { getUserInfo } from "../../firebase";
import { useEffect, useState } from "react";

import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import classNames from "classnames";
import Icon from "components/Icon";
import NotFound from "./NotFound";
import { Helmet } from "react-helmet";


function ProfileLayout() {
    // const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const { username } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      getUserInfo(username)
        .then((user) => {
          setUser(user);
        })
        .catch((err) => {
          setUser(false);
        });
    }, [navigate, username]);
  
    if (user === false) { return <NotFound /> }
    if (user === null) { return "Loading..." }
  
    return (
      user && (
        <div>
          <Helmet>
          <title>{user.full_name} {user.username} /Facebook </title>
        </Helmet>
          
          <Header user={user} />
          <nav className="border-t flex gap-x-16  justify-center items-center">
            <NavLink
              to={`/${username}`}
              end={true}
              className={({ isActive }) =>
                classNames({
                  "text-xs flex py-5 border-t tracking-widest items-center gap-x-1.5 font-semibold": true,
                  "text-[#8e8e8e] border-transparent": !isActive,
                  "text-black border-black": isActive,
                })
              }
            >
              <Icon name="posts" size={12} />
              GÖNDERİLER
            </NavLink>
            <NavLink
              to={`/${username}/reels`}
              end={true}
              className={({ isActive }) =>
                classNames({
                  "text-xs flex py-5 border-t tracking-widest items-center gap-x-1.5 font-semibold": true,
                  "text-[#8e8e8e] border-transparent": !isActive,
                  "text-black border-black": isActive,
                })
              }
            >
              <Icon name="reels" size={12} />
              REELS
            </NavLink>
            <NavLink
              to={`/${username}/tagged`}
              end={true}
              className={({ isActive }) =>
                classNames({
                  "text-xs flex py-5 border-t items-center  tracking-widest gap-x-1.5 font-semibold": true,
                  "text-[#8e8e8e] border-transparent": !isActive,
                  "text-black border-black": isActive,
                })
              }
            >
              <Icon name="tickets" size={12} />
              ETİKETLENENLER
            </NavLink>
            <NavLink to={`/${username}/update`} className="bg-black text-white">UPDATE</NavLink>
          </nav>
          <Outlet />
        </div>
      )
    );
  }
  
  export default ProfileLayout;