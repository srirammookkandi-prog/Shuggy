import React,{useState}from 'react'
import { UserRound } from 'lucide-react';

const SignIn = () => {
    const [showSignIn, setShowSignIn] = useState(false);
  return (
    <div className="flex justify-around">
          <div className="relative flex items-center">
  <UserRound size={25} />

  <span
    className="mx-2 font-semibold text-lg cursor-pointer"
    onClick={() => setShowSignIn(!showSignIn)}
  >
    Sign In
  </span>

  {showSignIn && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
    onClick={() => setShowSignIn(false)}
  >
    <div
      className="w-96 rounded-xl bg-white p-7 shadow-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between text-black">
        <h2 className="text-2xl font-bold">Sign In</h2>

        <button onClick={() => setShowSignIn(false)}>
          ✕
        </button>
      </div>

      <input
        type="email"
        placeholder="Email"
        className="mt-6 w-full rounded border p-3 text-black"
      />

      <input
        type="password"
        placeholder="Password"
        className="mt-4 w-full rounded border p-3 text-black"
      />

      <button className="mt-5 w-full rounded bg-orange-600 p-3 font-bold text-white">
        Sign In
      </button>
    </div>
  </div>
)}
  
</div>
</div>
  )
}
export default SignIn