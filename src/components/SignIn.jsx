import { useState, useRef } from 'react'
import { checkValidateData } from '../../utils/Validate';
import { UserRound } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utils/firebase.js"

const SignIn = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignedIn(!isSignedIn);
  }

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidateData(name.current?.value || "", email.current.value, password.current.value, isSignedIn);
    setErrorMessage(message);
    if (message) return;
    if (!isSignedIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current?.value
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
            setShowSignIn(!isSignedIn);
          }).catch((error) => {
            setErrorMessage(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          setIsSignedIn(isSignedIn);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Invalid Email-Id or Password");
        });

    }

  }

  return (
    <div className="flex justify-around">
      <div className="relative flex items-center">
        <UserRound size={25} onClick={() => setShowSignIn(!showSignIn)} />
        <span
          className="hidden md:inline-block mx-2 font-semibold text-lg cursor-pointer"
          onClick={() => setShowSignIn(!showSignIn)}
        >
          Sign In
        </span>
        {showSignIn && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
            onClick={() => setShowSignIn(false)}
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <div
                className="w-96 rounded-xl bg-white p-7 shadow-xl text-black"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between text-black">
                  <h1 className=' font-bold text-3xl text-orange-600 py-4'>
                    {isSignedIn ? "SIGN IN" : "SIGN UP"}
                  </h1>

                  <button onClick={() => setShowSignIn(false)}>
                    ✕
                  </button>
                </div>
                {!isSignedIn &&
                  <input
                    ref={name}
                    type='text'
                    placeholder='Enter Name'
                    className='p-3 my-4  border-2 w-full rounded-lg '>
                  </input>
                }
                <input
                  ref={email}
                  type='email'
                  placeholder='Enter Email'
                  className='p-3 my-4 w-full border-2 rounded-lg'>
                </input>

                <input
                  ref={password}
                  type='password'
                  placeholder='Enter Password'
                  className='p-3 border-2 my-4 w-full text-black rounded-lg'>
                </input>

                <p className='text-red-700 font-semibold p-2 text-lg'>
                  {errorMessage}
                </p>

                <button
                  className='p-3 bg-orange-600  hover:bg-orange-700 font-bold text-white w-full my-4 rounded-lg'
                  onClick={handleButtonClick}>
                  {isSignedIn ? "Sign In" : "Sign Up"}
                </button>

                <p className='font-bold text-black cursor-pointer hover:text-orange-600 '
                  onClick={toggleSignInForm}>
                  {isSignedIn ? "New user register? Sign up" : " Already a User? Sign In"}
                </p>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  )
}
export default SignIn