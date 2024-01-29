import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
    return(
        <div className="Footer">
            <p>More ways to shop: <Link to="/">Find an Apple Store</Link> or <Link to="/">other retailer</Link> near you. Or call 1-800-MY-APPLE.</p>
            <hr />
            <div className='footer-div'>
                <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
                <div className='links'>
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Terms of Use</Link>
                    <Link to="/">Sales and Refunds</Link>
                    <Link to="/">Legal</Link>
                    <Link to="/">Site Map</Link>
                </div>
                <Link to="/">United States</Link>
            </div>
        </div>
    )
}
export default Footer;