import { useRef } from 'react';
import Mac from '../MenuLists/mac';
import Store from '../MenuLists/store';
import Ipad from '../MenuLists/iPad';
import Iphone from '../MenuLists/iPhone';
import Watchh from '../MenuLists/watch';
import AirPods from '../MenuLists/AirPods';
import TvHome from '../MenuLists/TvHome';
import Enter from '../MenuLists/entertainment';
import Accessories from '../MenuLists/accessories';
import Supportt from '../MenuLists/support';
import Search from '../Search';
import Cart from '../Cart';

import './style.css';

const Menu = () => {

    const searchWindow = useRef(null);
    const cartWindow = useRef(null);

    const openSearch = () => {
      searchWindow.current.classList.add("active");
    }
    const closeSearch = () => {
        searchWindow.current.classList.remove("active");
    }

    const openCart = () => {
        cartWindow.current.classList.add("active");
    }
    const closeCart = () => {
        cartWindow.current.classList.remove("active");
    }

    return(
        <div className="nav">
            <div className='nav-list'>
                <a href="#header"><i className="fa-brands fa-apple"></i></a>
                <li className='menu'> Store <Store/> </li>
                <li className='menu'> Mac <Mac/> </li>
                <li className='menu'> iPad <Ipad/> </li>
                <li className='menu'> iPhone <Iphone/> </li>
                <li className='menu'> Watch <Watchh/> </li>
                <li> Vision </li>
                <li className='menu'> AirPods <AirPods/> </li>
                <li className='menu'> TV & Home <TvHome/> </li>
                <li className='menu'> Entertainment <Enter/> </li>
                <li className='menu'> Accessories <Accessories/> </li>
                <li className='menu'> Support <Supportt/> </li>
                <i class="fa-solid fa-magnifying-glass" onClick={openSearch} ></i>
                    <Search searchWindow={searchWindow} closeSearch={closeSearch}/>
                <i class="fa-solid fa-bag-shopping" onClick={openCart}></i>
                    <Cart cartWindow={cartWindow} closeCart={closeCart}/>
            </div>
        </div>
    )
}

export default Menu;