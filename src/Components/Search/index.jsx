import './style.css';

const Search = ({ searchWindow, closeSearch }) => {
    return(
        <div className="searchMenu" ref={searchWindow} onMouseLeave={closeSearch}>
        <div className='search-menu-content'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Search apple.com'/>
        </div>
        <ul>
            <h4>Quich Links</h4>
            <li>
                <i className="fa-solid fa-arrow-right"></i>
                Find a Stope</li>
            <li>
                <i className="fa-solid fa-arrow-right"></i>
                Apple Vision Pro</li>
            <li>
                <i className="fa-solid fa-arrow-right"></i>
                AirPods</li>
            <li>
                <i className="fa-solid fa-arrow-right"></i>
                AirTag</li>
            <li>
                <i className="fa-solid fa-arrow-right"></i>
                Apple Trade In</li>
        </ul>
    </div>
    )
}
 
export default Search;