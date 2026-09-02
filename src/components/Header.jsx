import { useEffect } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { Search, Circle, } from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import SignIn from "./SignIn";
import Logout from "./Logout";



const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName } = user;
        dispatch(addUser({ email: email, displayName: displayName }));
      } else {
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, [])

  return (
    <div className="flex justify-between py-5  md:p-5 bg-orange-600">
      <div className="flex  font-semibold text-white items-center text-lg mx-5">
        <img
          className=" w-8  md:w-12 rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgANqB6675mmRJ8tmv2qM93I77zW2zWnrybPG3wvKr1hDFsnOP_c6oaAA&s=10"
          alt="logo"
        />
        <h1 className=" md:px-4 md:text-2xl ">
          <Link to="/">Shuggy</Link>
        </h1>
      </div>
      <div className="navitems flex items-center">
        <ul className="flex items-center align-middle px-4 font-bold text-white ">
          <div><Link className="flex justify-between" to="/search">
            <Search />
            <span className="hidden md:inline-block mx-2 font-semibold text-lg ">Search</span></Link>
          </div>
          <div className="mx-10 flex items-center gap-2 cursor-pointer">
            <div className="relative">
              <Circle />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
                {cartItems.length}
              </span>
            </div>
            <span className="text-lg font-medium">
              <Link to="/cart"> Cart </Link>
            </span>
          </div>
          <div >
            {user ? <Logout /> : <SignIn />}
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Header;
