import firebase from 'firebase';

export const appName = "react-adv-lana-mouse";

var firebaseConfig = {
    apiKey: "AIzaSyC2hcbKTY1L2qhaGSLXja8n72CD_a-KfYw",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "900318040575"
  };


firebase.initializeApp(firebaseConfig);
