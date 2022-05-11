import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBFd5hOsPz45of1EXigrOLaQD0OXY6fT9M",
  authDomain: "reporterfoca-a5774.firebaseapp.com",
  projectId: "reporterfoca-a5774",
  storageBucket: "reporterfoca-a5774.appspot.com",
  messagingSenderId: "425483677334",
  appId: "1:425483677334:web:3a0a37e8cfbdd6eba09cb7",
  measurementId: "G-LPK5B66LGQ"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth()