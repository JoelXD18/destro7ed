function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => {
      sec.classList.remove('active');
    });
    document.getElementById(section).classList.add('active');
  }

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBJZdUYznvwU_YDDjjEVjA6oW8Bgxg6Qo",
  authDomain: "message-801a6.firebaseapp.com",
  databaseURL: "https://message-801a6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "message-801a6",
  storageBucket: "message-801a6.firebasestorage.app",
  messagingSenderId: "930429385952",
  appId: "1:930429385952:web:331b467af4cd6902806485",
  measurementId: "G-GBJWMHPQJ6"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);
