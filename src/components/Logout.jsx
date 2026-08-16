import React,{useState} from 'react';
import { UserRound } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from "../../utils/userSlice";


const Logout = () => {

   const [showSignIn, setShowSignIn] = useState(false);
   const user = useSelector((store) => store.user.users);
   const dispatch = useDispatch();
   const handleLogout=(e) => {
         e.preventDefault();
         dispatch(logout()
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
    {user.name}
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
        <h2 className="text-2xl font-bold">Hi, {user.name}</h2>

        <button onClick={() => setShowSignIn(false)}>
          ✕
        </button>
      </div>
       <button onClick={handleLogout} className="mt-5 w-full rounded bg-orange-600 p-3 font-bold text-white">
        LogOut
      </button>
    </div>
     
  </div>
)}
  
</div>
</div>
  )
}

export default Logout