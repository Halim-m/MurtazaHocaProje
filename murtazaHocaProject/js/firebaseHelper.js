// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get, onValue } from "firebase/database";


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
const dbApp = initializeApp(firebaseConfig);

export function writeComment(id, comment) {
    const db = getDatabase(dbApp);
    const reference = ref(db, "yorum/" + id);
    set(reference, comment)
}

export function getAll() {
    const db = getDatabase();
    const reference = ref(db, 'yorum/');
    onValue(reference, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        console.log(typeof (data));
    });
}

writeComment("asdasfda", "bu kahve gayet iyi");
getAll();


