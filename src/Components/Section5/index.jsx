import { Link } from 'react-router-dom';

import './Section5.css';

const Section5 = () => {
    return(
        <div className="section5">
            <div className="tradeIn">
                <h2>
                    <i className="fa-brands fa-apple"></i>
                    Trade In
                </h2>
                <p>Get $200-$650 in credit when <br/> you trade in iPhone 11 or higher.</p>
                <Link to="/">See what your device is worth &#62;</Link>
            </div>
            <div className="card">
                <h2>
                    <i className="fa-brands fa-apple"></i>
                    Card
                </h2>
                <p>Get up to 3% Daily Cash back <br/> with every purchase.</p>
                <div className='link-div'>
                    <Link to="/">Learn more &#62;</Link>
                    <Link to="/">Apply now &#62;</Link>
                </div>
            </div>
        </div>
    )
}

export default Section5;