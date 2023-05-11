import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Icon from './Icon';
import Scrollbars from 'react-custom-scrollbars-2';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const user = useSelector(state => state.auth.user)

  return (
    <div className={`sidebar  ${isOpen ? 'open' : ''}`}>
        <Scrollbars style={{ width: isOpen ? 48 : 300, height: 700 }} >
       
      <ul className={`menu  w-[300px] text-base font-semibold bg-[#f0f2f5] text-[#050505]  `}>
        <div className='mb-5'>
          <NavLink to="/"> <li className='flex gap-2 h-10 p-5'> <Icon name="Home-filled" size={20} /> Anasayfa</li></NavLink>
          <NavLink to={`/${user.username}`}><li className='flex gap-2 h-10 p-5'> <img alt="" src={user.photoURL || "/no-avatar.jpg"} className="w-6 h-6 rounded-full "/> {user.full_name} {user.username} </li></NavLink>
        </div>
        <hr/>
        <div className='mb-5'>
       <NavLink to="/watch"> <li className='flex gap-2 h-10 p-5'><Icon name="Watch" size={24} /> Watch</li></NavLink>
       <NavLink to="/friends"><li className='flex gap-2 h-10 p-5'><Icon name="friends" size={24} /> Arkadaşlar</li></NavLink>
       <NavLink to="/marketplace"><li className='flex gap-2 h-10 p-5'><Icon name="market" size={24} /> Marketplace</li></NavLink> 
       <NavLink to="/game"><li className='flex gap-2 h-10 p-5'><Icon name="game" size={24} /> Oyun</li></NavLink> 
       <NavLink to="/seeall"><li className='flex gap-2 h-10 p-5'><Icon name="points" size={20} /> Tümünü Gör</li></NavLink> 
        </div>
        <hr/>
        <div className='mb-5'>
        <NavLink to="/group/group1"><li className='flex gap-2 h-10 p-5'><Icon name="Watch" size={24} /> Grup 1</li></NavLink>  
        <NavLink to="/group/group2"><li className='flex gap-2 h-10 p-5'><Icon name="Watch" size={24} /> Grup 2</li></NavLink>   
        <NavLink to="/group/group3"><li className='flex gap-2 h-10 p-5'><Icon name="Watch" size={24} /> Grup 3</li></NavLink>   
        <NavLink to="/group"><li className='flex gap-2 h-10 p-5'><div className='rounded-full w-8 h-8 items-center justify-center flex bg-[#e4e6eb]'> <Icon name="group" size={16} /></div> Tüm grupları gör</li></NavLink>   
        </div>
        <hr/>
        <div className='mb-5'>
        <NavLink to="game/101plus"><li className='flex gap-2 h-10 p-5'><img className='w-6 h-6' src='https://play-lh.googleusercontent.com/tJtJ1OTLM6WhurhfYuIwCqQHysX44q0Q296GC6hDZZJjlYXJJ0fkRInIyBpV9y-XEg' alt=''/> 101 YüzBir Okey Plus</li></NavLink>    
        <NavLink to="game/petsociety"><li className='flex gap-2 h-10 p-5'><img src='https://i2.milimaj.com/i/milliyet/75/0x0/60b5192c55427e2300ca1903.png' alt='' className='w-6 h-6'/> Ateş Ve Su</li></NavLink>    
        <NavLink to="/seeall"> <li className='flex gap-2 h-10 p-5'><div className='rounded-full w-8 h-8 items-center justify-center flex bg-[#e4e6eb]'><Icon  name="shortcut" size={20} /></div>  Tüm kısayolları gör</li></NavLink>   
        </div>
        <div className='h-14 text-[13px] p-4 text-[#65676B]'>
            Gizlilik koşulları bilmem ne
        </div>
      </ul>
      </Scrollbars>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? '...' : '...'}
      </button>
    </div>
  );
};

export default Sidebar;
