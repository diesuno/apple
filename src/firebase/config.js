import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyC5Vkw4rUqDVwkJFmTKyKxM6xzUN24GDPs",
    authDomain: "apple-ad40f.firebaseapp.com",
    projectId: "apple-ad40f",
    storageBucket: "apple-ad40f.appspot.com",
    messagingSenderId: "259520659488",
    appId: "1:259520659488:web:ff4cb6ccc885b193e93c45"
  };

  const app = initializeApp(firebaseConfig);
  
  export default function getFirestoreApp(){
      return app
  }