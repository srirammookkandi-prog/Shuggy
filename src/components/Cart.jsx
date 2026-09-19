import { useSelector } from 'react-redux'
import MenuItems from './MenuItems'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../utils/cartSlice'
import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const uniqueCartItems = cartItems.filter((item, index, items) =>
        index === items.findIndex((cartItem) =>
            cartItem.menuInfo?.name === item.menuInfo?.name &&
            cartItem.menuInfo?.imageId === item.menuInfo?.imageId &&
            cartItem.restaurantName === item.restaurantName
        )
    );
    const totalPrice = cartItems.reduce((total, item) => {
        const itemPrice = item.menuInfo?.defaultPrice ?? item.menuInfo?.price ?? 0;
        return total + itemPrice;
    }, 0);
    const restaurantGroups = uniqueCartItems.reduce((groups, item) => {
        const restaurantName = item.restaurantName || 'Restaurant';
        const group = groups.find((entry) => entry.name === restaurantName);

        if (group) {
            group.items.push(item);
        } else {
            groups.push({ name: restaurantName, items: [item] });
        }

        return groups;
    }, []);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className='text-center p-4 m-4 '>
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-4xl text-orange-500 mx-2'>CART</h1>
                <div> {(cartItems.length == 0) ?
                    (<button className='m-2 px-4 py-2 bg-orange-500 text-white rounded-3xl'><Link to="/">See Restaurant List</Link></button>) :
                    (<button className='m-2 p-2 bg-orange-500 text-white rounded-3xl' onClick={() => handleClearCart()}>Clear cart</button>)}</div>
            </div>
            {cartItems.length == 0 && <h1 className='text-2xl m-2 p-2'>Cart is empty please add items.</h1>}
            <div className='w-10/12 m-auto'>
                {restaurantGroups.map((group) => (
                    <div key={group.name}>
                        <div className='flex items-center'>
                            <h2 className='text-left font-bold text-2xl m-2'>{group.name}</h2>
                            <Link to={`/restaurants/${group.items[0]?.restaurantId}`}>
                                <span className='m-1 text-xl'><ChevronRight /></span>
                            </Link>
                        </div>
                        {group.items.map((item) => (
                            <MenuItems
                                key={`${group.name}-${item.menuInfo?.name}-${item.menuInfo?.imageId}`}
                                menuInfo={item.menuInfo}
                                restaurantName={item.restaurantName}
                                restaurantId={item.restaurantId}
                            />
                        ))}
                    </div>
                ))}
                {cartItems.length > 0 && (
                    <div className='flex justify-end mx-20 border-gray-300 mt-4 pt-4'>
                        <h2 className='font-bold text-2xl'>
                            Total: ₹ {(totalPrice / 100).toFixed(2)}
                        </h2>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart
