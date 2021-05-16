import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const config = {
    apiKey: "AIzaSyBgpj00JK5MrsNfDsxHR8YIvCcIu582uu4",
    authDomain: "crwn-890d2.firebaseapp.com",
    projectId: "crwn-890d2",
    storageBucket: "crwn-890d2.appspot.com",
    messagingSenderId: "335749643126",
    appId: "1:335749643126:web:b7699e83cc9186e883d857",
    measurementId: "G-S7RESL2GPZ"
}


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
