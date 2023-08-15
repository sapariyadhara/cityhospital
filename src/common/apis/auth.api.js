import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { GoogleAuthProvider } from "firebase/auth";

export const signupApi = (values) => {
  console.log(values);
  try {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          console.log('Signed in');
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          onAuthStateChanged(auth, (user) => {
            if (user) {
              sendEmailVerification(auth.currentUser)
                .then(() => {
                  // Email verification sent!
                  // ...
                  resolve({ message: 'Email verification sent!', user: user })
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  reject({ message: errorCode });
                });
            } else {
              // User is signed out
              // ...
            }
          })
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          // reject(errorCode, errorMessage);
          if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
            reject({ message: "Alredy User Regester" })
          } else if (errorCode.localeCompare("auth/network-request-failed") === 0) {
            reject({ message: "Please Check Your Internet Conection" })
          }
        })
    })

  } catch (error) {
    console.log(error);
  }
}

export const loginApi = values => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        if (user.emailVerified) {
          resolve({ user: user, message: 'Email varifed' });
          // localStorage.setItem("status", "true");
          // navigate("/");
        } else {
          reject({ message: 'Check varifed' });
          // alert('Varify Email First')
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        // const errorMessage = error.message;
        // reject(errorCode, errorMessage)
        if (errorCode.localeCompare("auth/wrong-password") === 0) {
          reject({ message: "Please Enter Carrect Password" })
        } else if (errorCode.localeCompare("auth/user-not-found") === 0) {
          reject({ message: "Please Sign up First" })
        }
      });
  })
}

export const forgotPassApi = (values) => {
  return new Promise((resolve, reject) => {
    sendPasswordResetEmail(auth, values.email)
      .then(() => {
        // Password reset email sent!
        // ..
        resolve({ message: 'Password reset email sent!' });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode.localeCompare("auth/user-not-found") === 0) {
          reject({ message: "Please Sign up First" })
        }
        // ..
      });
  })
}

export const logOutApi = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        resolve({ message: "Log-out successful." });
      }).catch((error) => {
        // An error happened.
        reject({ message: "An error happened." });
      })
  })
}

export const signinWithGoogleApi = () => {
  const provider = new GoogleAuthProvider();
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        resolve({message: 'The signed-in user info.'} , token)
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        resolve('IdP data available using getAdditionalUserInfo(result)')
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        reject({message: errorCode})
        // ...
      });
  })
}