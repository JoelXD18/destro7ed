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

//subir mensajes a firebase
function submitMessage() {
  const username = document.getElementById('username').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!username || !message) {
    alert("Por favor, ingresa un nombre de usuario y un mensaje.");
    return;
  }

  // Guardar el mensaje en Firebase
  const messageData = {
    username: username,
    message: message,
    timestamp: Date.now()
  };

  firebase.database().ref('messages').push(messageData)
    .then(() => {
      document.getElementById('message').value = ''; // Limpiar el campo de mensaje
    })
    .catch((error) => {
      console.error("Error al enviar el mensaje:", error);
    });
}

//cargar mensajes
function loadMessages() {
  const messagesRef = firebase.database().ref('messages');
  
  messagesRef.on('child_added', (snapshot) => {
    const messageData = snapshot.val();
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${messageData.username}</strong>: <p>${messageData.message}</p>`;
    document.getElementById('messages').appendChild(messageElement);
  });
}

// Cargar mensajes al inicio
loadMessages();

