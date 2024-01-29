import { Link } from 'react-router-dom';

import './Section4.css';

const Section4 = () => {
    return(
        <div className="section4">
            <div className="macbook">
                <h2>MacBook Air 15"</h2>
                <p>Impressively big.Impossibly thin.</p>
                <div className='link-div'>
                    <Link to="/">Learn more &#62;</Link>
                    <Link to="/">Buy &#62;</Link>
                </div>
            </div>
            <div className="airpods">
                <h2>AirPods Pro</h2>
                <p>Adaptive Audio.Now playing.</p>
                <div className='link-div'>
                    <Link to="/">Learn more &#62;</Link>
                    <Link to="/">Buy &#62;</Link>
                </div>
            </div>
        </div>
    )
}

export default Section4;