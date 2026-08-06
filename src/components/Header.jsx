import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
    const [buttonName, setButtonName] = useState("login");
    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);


    return (
        <div className="flex justify-between p-5 bg-orange-600">
            <div className="flex  font-bold text-white items-center text-4xl">
                <img className="w-25 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgANqB6675mmRJ8tmv2qM93I77zW2zWnrybPG3wvKr1hDFsnOP_c6oaAA&s=10" alt="logo" />
                <h1 className="px-4">Shuggy</h1>
            </div>
            <div className="navitems flex items-center">
                <ul className="flex align-middle px-4 font-bold text-white">
                    <li className="px-4"> Online status:{onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4" > <Link to="/about"> About us</Link >
                    </li>
                    <li className="px-4"><Link to="/Contact"> Contact us</Link>
                    </li>
                    <li className="px-4"><Link to="/Cart">{cartItems.length == 0 ? <h1>Cart</h1> : <h1>Cart ({cartItems.length} - items)</h1>}</Link> </li>
                    <button className="loginbtn px-4" onClick={() => { buttonName == "login" ? setButtonName("logout") : setButtonName("login") }}>{buttonName}</button>
                </ul>
            </div>

        </div>
    );
}
export default Header