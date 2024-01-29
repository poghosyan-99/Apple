import './style.css';

const Store = () => {
    return(
        <div className='list'>
            <ul>
                <span>Shop</span>
                <li>Shop the Latest</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Apple Watch</li>
                <li>Accessories</li>
            </ul>
            <ul>
                <span>Quick Links</span>
                <li>Find a Store</li>
                <li>Order Status</li>
                <li>Apple Trade In</li>
                <li>Financing</li>
            </ul>
            <ul>
                <span>Shop Special Stores</span>
                <li>Certified Returbished</li>
                <li>Education</li>
                <li>Business</li>
                <li>Veterans & Military</li>
                <li>Government</li>
            </ul>
        </div> 
    )
}
export default Store;