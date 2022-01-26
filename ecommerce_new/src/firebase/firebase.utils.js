// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-9CMEIyV-eJ77puAX6tbLDUtwLWBb8kI",
  authDomain: "keyafe-db.firebaseapp.com",
  projectId: "keyafe-db",
  storageBucket: "keyafe-db.appspot.com",
  messagingSenderId: "506580501084",
  appId: "1:506580501084:web:81d344a6f5eb4f519c9c99",
  measurementId: "G-W2DTSSMKML"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt':'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const createUserProfileDocument = async (userAuth,additionalData) => {
  console.log("createUserProfileDocument==",userAuth)
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
 if(!snapShot.exists){
   const {displayName,email} = userAuth;
   const createdAt = new Date();
   try{
      await userRef.set({displayName,email,createdAt,...additionalData})
   }catch(err){
      console.log("error creating user ",err);
   }
 }
 return userRef;
}
export default firebase;