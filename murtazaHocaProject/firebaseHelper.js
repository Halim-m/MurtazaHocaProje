// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set } = require("firebase/database");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwnOkiPB6dflnLOJD1feZ0Q80iBhY3sYE",
    authDomain: "murtazahocaproject.firebaseapp.com",
    databaseURL: "https://murtazahocaproject-default-rtdb.firebaseio.com",
    projectId: "murtazahocaproject",
    storageBucket: "murtazahocaproject.appspot.com",
    messagingSenderId: "347627584061",
    appId: "1:347627584061:web:25ead69796936e5ab48854"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
function writeComment(id, comment) {
    const db = getDatabase(app);
    const reference = ref(db, "yorum/" + id);
    set(reference, comment
    )
}

writeComment("id", "bu kahve gayet iyi");

