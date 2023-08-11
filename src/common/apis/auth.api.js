import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase";

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
        // reject(errorCode, errorMessage);
        if (errorCode.localeCompare("auth/user-not-found") === 0) {
          reject({ message: "Please Sign up First" })
        }
        // ..
      });
  })
}

export const logOutApi = (values) => {
  return new Promise((resolve , reject) => {
    signOut(values).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
    })
  })
}