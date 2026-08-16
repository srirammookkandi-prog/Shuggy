import React,{useState}from 'react'
import { UserRound } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login } from "../../utils/userSlice";

const SignIn = () => {
    const [showSignIn, setShowSignIn] = useState(false);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

     const user = useSelector((store) => store.user.users);
    const dispatch = useDispatch();
    const handleSubmit=(e) => {
      e.preventDefault();
      dispatch(login(
        {
          name: name,
          email: email,
          password: password,
          loggedIn: true,
        })
      );
    }

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
     <form onSubmit={(e)=>handleSubmit(e)}>
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
      type ="name"
       placeholder="Enter Name"
       value={name}
       onChange={(e)=>setName(e.target.value)}
      className="mt-6 w-full rounded border p-3 text-black"
      />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
       onChange={(e)=>setEmail(e.target.value)}
        className="mt-6 w-full rounded border p-3 text-black"
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className="mt-4 w-full rounded border p-3 text-black"
      />

      <button type="submit" className="mt-5 w-full rounded bg-orange-600 p-3 font-bold text-white">
        Sign In
      </button>
    </div>
     </form>
  </div>
)}
  
</div>
</div>
  )
}
export default SignIn