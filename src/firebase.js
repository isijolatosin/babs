import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyBYvjjB53d-DtuiBumOzWhdhG-TWdwQ6Kg',
	authDomain: 'babs-4d967.firebaseapp.com',
	projectId: 'babs-4d967',
	storageBucket: 'babs-4d967.appspot.com',
	messagingSenderId: '1004838378053',
	appId: '1:1004838378053:web:886481bb3847b37dc1612c',
	measurementId: 'G-XT7N14Y9XZ',
}

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()
const storage = firebase.storage()
const auth = firebase.auth()

async function createUserProfileDocument(userAuth, additionalData) {
	if (!userAuth) {
		return
	}
	const userRef = db.doc(`users/${userAuth.uid}`)
	const snapShot = await userRef.get()

	if (!snapShot.exists) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			})
		} catch (error) {
			console.log('error creating user', error.message)
		}
	}

	return userRef
}
export { db, storage, auth, createUserProfileDocument, firebase as default }
