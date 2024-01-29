import './Header.css'

const Header = () => {
    return(
        <div className='Header' id='header'>
            <div className='image'></div>
            <div className="info">
               <h2>iPhone 15 pro</h2>
               <h3>Titanium.So strong.So light.So Pro</h3>
               <span><a href="#" className='learn'>Learn More<i className="fa-solid fa-chevron-right"></i></a></span>
               <span><a href="#">Buy<i className="fa-solid fa-chevron-right"></i></a></span>
            </div>
        </div>
    )
}

export default Header;