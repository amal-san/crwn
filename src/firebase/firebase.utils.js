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


export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch(error) {
            console.log('error create user', error.message);
        }

    }
    console.log("userRef ",userRef)
    return userRef;
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
