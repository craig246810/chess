import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDyI8JyHxSgEk0BJTnc8noDTbR92JR00ao',
  authDomain: 'chess-9a41f.firebaseapp.com',
  databaseURL: 'https://chess-9a41f.firebaseio.com',
  projectId: 'chess-9a41f',
  storageBucket: 'chess-9a41f.appspot.com',
  messagingSenderId: '503852041022'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
