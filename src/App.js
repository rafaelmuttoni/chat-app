import React from "react";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore"; // database
import "firebase/auth"; // user auth

import { useAuthState } from "react-firebase-hooks/auth";

import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

firebase.initializeApp({
  apiKey: "AIzaSyBVto-9wL57wiTsCauCyJPhB4eaLKQWKjM",
  authDomain: "chat-app-f2ad9.firebaseapp.com",
  databaseURL: "https://chat-app-f2ad9.firebaseio.com",
  projectId: "chat-app-f2ad9",
  storageBucket: "chat-app-f2ad9.appspot.com",
  messagingSenderId: "622803625168",
  appId: "1:622803625168:web:065208df3af23f5899ead5",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        {auth.currentUser && <SignOut auth={auth} />}
      </header>
      <section>
        {user ? (
          <ChatRoom firebase={firebase} firestore={firestore} auth={auth} />
        ) : (
          <SignIn firebase={firebase} auth={auth} />
        )}
      </section>
    </div>
  );
}

export default App;
