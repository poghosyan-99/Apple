import { Link } from 'react-router-dom';

import './Section1.css';

const Section1 = () => {
    return (
        <div className="section1">
            <div className='infoIphone15'>
                <h2>iPhone 15</h2>
                <p>New camera.New design.Newphoria</p>
                <div className='link-div'>
                    <Link to="/">Learn more &#62;</Link>
                    <Link to="/">Buy &#62;</Link>
                </div>
            </div>
        </div>
    )
}

export default Section1;
