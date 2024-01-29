import './style.css';

const Cart = ({ cartWindow, closeCart }) => {
    return(
        <div className='bag' ref={cartWindow} onMouseLeave={closeCart}>
            <div className='bag-content'>
                <h1>Your Bag is empty</h1>
                <h5><a href="#">Sign in</a> to see if you have any saved items</h5>
                <ul>
                    <p>My Profile</p>
                    <li><i class="fa-solid fa-cube"></i> Orders</li>
                    <li><i class="fa-regular fa-bookmark"></i> Your Saves</li>
                    <li><i class="fa-solid fa-gear"></i> Account</li>
                    <li><i class="fa-regular fa-circle-user"></i> Sign In</li>
                </ul>
            </div>
        </div>
    )
}
export default Cart;