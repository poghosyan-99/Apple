import { Link } from 'react-router-dom';

import './Section3.css';

const Section3 = () => {
    return(
        <div className="section3">
            <div className="iPad">
                <h2>iPad Pro</h2>
                <p>Supercharged by</p>
                <div className='link-div'>
                    <Link to="/">Learn more &#62;</Link>
                    <Link to="/">Buy &#62;</Link>
                </div>
            </div>
            <div className="vision">
                <h2>
                    <i className="fa-brands fa-apple"></i>
                    Vision Pro
                </h2>
                <p>Welcome to the era of spatial computing</p>
                <p>Available early next year in the U.S.</p>
                <Link to="/">Learn more &#62;</Link>
            </div>
        </div>
    )
}

export default Section3;