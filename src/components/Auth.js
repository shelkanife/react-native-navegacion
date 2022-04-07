import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../config'
import { getFirestore } from 'firebase/firestore/lite';

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export {
    auth,
    app,
    db
}    