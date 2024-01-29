import { Link } from 'react-router-dom';

import './Section2.css';

const Section2 = () => {
    return (
        <div className="section2">
            <div className='watch-info'>
                <h2>
                    <i className="fa-brands fa-apple"></i>
                    WATCH
                </h2>
                <h3>SERIES 9</h3>
                <p>Smarter.Brighter.Mighter</p>
                <div className='link-div'>
                    <Link to="/">Learn more &#62;</Link>
                    <Link to="/">Buy &#62;</Link>
                </div>
            </div>
        </div>
    )
}

export default Section2;
