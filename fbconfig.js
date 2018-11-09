
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyC2hcbKTY1L2qhaGSLXja8n72CD_a-KfYw",
    authDomain: "react-adv-lana-mouse.firebaseapp.com",
    databaseURL: "https://react-adv-lana-mouse.firebaseio.com",
    projectId: "react-adv-lana-mouse",
    storageBucket: "react-adv-lana-mouse.appspot.com",
    messagingSenderId: "900318040575"
  };

  firebase.initializeApp(config);