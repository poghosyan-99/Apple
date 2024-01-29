import { Outlet } from 'react-router';
import Menu from '../../Components/Menu';


const Layout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
}
export default Layout;
