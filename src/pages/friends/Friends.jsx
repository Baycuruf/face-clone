import React from 'react'
import { useEffect, useState } from 'react';
  import { collection, getDocs } from 'firebase/firestore';
  import { db } from '../../firebase';
// function Friends() {
  
  
  const Friends = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'users'));
          const fetchedUsers = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setUsers(fetchedUsers);
        } catch (error) {
          console.log('Error fetching users:', error);
        }
      };
  
      fetchUsers();
    }, []);
  
    return (
      <div className=''>
        <h1>Arkadaşlar</h1>
        
        <ul className='grid grid-cols-4'>
          {users.map((user) => (
            
            <div key={user.id} className='h-[200px] w-[200px] border-black border'>
              <li className='text-sky-500 w-28 text-md font-semibold text-center'>{user.full_name}</li>
              <li className='text-sky-500 w-28 text-md font-semibold text-center'> {user.username}</li>
              
              
              <li className='text-sm text-center w-28'>Takipçi: {user.followers.length}</li>
              <li className='w-28 text-center text-sm'>Cinsiyet: {user.gender}</li>
              <div className='items-center flex justify-center' > <img src={user.photoURL} alt='X' className='w-20 h-20 rounded-full '/></div>
             
              <li className=' text-center text-sm'>Doğum Tarihi:{user.day} {user.month} {user.year} </li>
            </div>
          ))}
        </ul>
     
      </div>
    );
  };
  
  export default Friends;  
   


