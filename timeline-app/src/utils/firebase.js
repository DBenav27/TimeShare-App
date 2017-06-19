import firebase from 'firebase';

// Provided by the Firebase console
const config = {
  apiKey: "AIzaSyCxwvshvBmRgRLTrFQ2J1h4u_F2kGA4IXY",
  authDomain: "my-awesome-project-792fe.firebaseapp.com",
  databaseURL: "https://my-awesome-project-792fe.firebaseio.com",
  projectId: "my-awesome-project-792fe",
  storageBucket: "my-awesome-project-792fe.appspot.com",
  messagingSenderId: "8330795096"
};

// Firebase instance
firebase.initializeApp(config);

export { firebase, database, auth };
export { firebaseListToArray };
