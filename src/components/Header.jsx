import { useState } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { UserRound, Search } from "lucide-react";
import { BsCart } from "react-icons/bs";

const Header = () => {
  const [buttonName, setButtonName] = useState("Sign in");
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between p-5 bg-orange-600">
      <div className="flex  font-semibold text-white items-center text-lg mx-5">
        <img
          className="w-12 rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgANqB6675mmRJ8tmv2qM93I77zW2zWnrybPG3wvKr1hDFsnOP_c6oaAA&s=10"
          alt="logo"
        />
        <h1 className="px-4 ">
          <Link to="/">Shuggy</Link>
        </h1>
      </div>
      <div className="navitems flex items-center">
        <ul className="flex align-middle px-4 font-bold text-white ">
          <div  className="mx-10 flex justify-around">
            <Search />
            <span className="mx-2 font-semibold text-lg "><Link to="/search">Search</Link></span>
          </div>
          <div className="flex justify-around">
            <UserRound size={25} />
            <span className="mx-2 font-semibold text-lg ">
              <Link to="/signin">Sign In</Link>
              </span>
          </div>
          <div className="mx-10 flex items-center gap-2 cursor-pointer">
            <div className="relative">
              <BsCart size={32} strokeWidth={0.1} />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
                {cartItems.length}
              </span>
            </div>
            <span className="text-lg font-medium">
              <Link to="/cart"> Cart </Link>
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Header;
