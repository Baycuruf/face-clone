// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
  updatePassword,
  GoogleAuthProvider,
} from "firebase/auth";
import toast from "react-hot-toast";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { userHandle } from "./utils";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvFIv_6uDb-DtcKWkU0tPmjsVbeCD9LRg",
  authDomain: "facebook-clone-cb70d.firebaseapp.com",
  databaseURL: "https://facebook-clone-cb70d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "facebook-clone-cb70d",
  storageBucket: "facebook-clone-cb70d.appspot.com",
  messagingSenderId: "114241445278",
  appId: "1:114241445278:web:ef666ff2d92a2cf3668a8f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

onAuthStateChanged(auth, async (user) => {
  if (user) {
   const dbUser = await getDoc(doc(db, "users", user.uid))
    let data = {
      uid: user.uid,
      full_name: user.full_name,
      username:user.username,
      email: user.email,
      emailVerified: user.emailVerified,
      photoURL:user.photoURL,
      ...dbUser.data()
    }
    userHandle(data);
  } else {
    userHandle(false);
  }
});

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response
  } catch (error) {
    toast.error(error.code);
  }
};

export const getUserInfo = async (uname) =>{
  const username = await getDoc(doc(db, "usernames", uname));
  if(username.exists()){
  const user = (await getDoc(doc(db,"users", username.data().user_id))).data()
  return user
  }else{
    toast.error("Kullanıcı Bulunamadı!")
    throw new Error("Kullanıcı Bulunamadı!")
  }
} 

export const register = async ({ email, password, username, full_name, gender, day,month,year }) => {
  try {
    const user = await getDoc(doc(db, "usernames", username));
    if (user.exists()) {
      toast.error(`${username} kullanıcı adı başkası tarafından kullanılıyor`);
    } else {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response.user) {
        await setDoc(doc(db, "usernames", username), {
          user_id: response.user.uid,
        });
        await setDoc(doc(db, "users", response.user.uid), {
          username,
          full_name,
          email,
          followers: [],
          following: [],
          notifications: [],
          website: "",
          bio: "",
          phoneNumber: "",
          photoURL:"",
          gender,
          day,
          month,
          year,
          posts: 0

        });
        await updateProfile(auth.currentUser, {
          full_name: full_name, 
        });
        return response.user;
      }
    }
  } catch (error) {
    toast.error(error.code);
  }
};
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    toast.error(err.code);
  }
};

export const update = async (data) => {
  try {
    await updateProfile(auth.currentUser, data);
    toast.success("Profil Güncellendi.");
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};
export const updateDataInFirestore = async (data) => {
  
  const docRef = doc(db, 'users', auth.currentUser.uid); // Güncellenmek istenen belge referansını alın

  try {
    await updateDoc(docRef, {
      full_name: data.full_name,
      photoURL: data.photoURL,
      username:data.username,
      followers: [],
          following: [],
          notifications: [],
          website: "",
          bio: "",
          phoneNumber: "",
          gender:data.gender,
          day:data.day,
          month:data.month,
          year:data.year,
          posts: 0
    });
    console.log('Belge başarıyla güncellendi');
    
  } catch (error) {
    console.log('Firestore veri güncellenemedi:', error);
  }
};
//PAROLAYI GÜNCELLEME
export const resetPassword = async (password) => {
  try {
    await updatePassword(auth.currentUser, password);
    console.log("Parola Güncellendi.");
    return true;
  } catch (error) {
    console.log(error.message);
  }
};




