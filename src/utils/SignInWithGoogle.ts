import { Auth, signInWithPopup } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { db, provider } from './Firebase'

const SignInWithGoogle = async (auth: Auth) => {
  await signInWithPopup(auth, provider).then(async (user) => {
    try {
      await addDoc(collection(db, 'users'), {
        name: user.user.displayName,
        emaail: user.user.email,
        phtoURL: user.user.photoURL,
        uid: user.user.uid,
      })
    } catch (err) {
      console.error(err)
    }
  })
}

export default SignInWithGoogle
