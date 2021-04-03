import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBi9Ud61SNli_8OvlYXMXUnbyilBkiGL_w",
  authDomain: "crwn-db-91e6f.firebaseapp.com",
  projectId: "crwn-db-91e6f",
  storageBucket: "crwn-db-91e6f.appspot.com",
  messagingSenderId: "241720776869",
  appId: "1:241720776869:web:5408ec674c1b683aa6554c",
  measurementId: "G-RHX0GZCGER",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
