import { NavLink } from 'react-router-dom';
import {AiFillHome, AiFillPlusCircle} from 'react-icons/ai';
import {RiBarChart2Fill} from 'react-icons/ri';
import {FaWallet} from 'react-icons/fa';
import {HiUsers} from 'react-icons/hi'

const BottomBar = () => {
    return(
        <nav className='container__navbarBottom'>
            <section className='container__navbarBottom--icons'>
                <NavLink to="/Home" className={({isActive}) => isActive ? "icons__navbarBottom bg-bottom-bar-icon font-active" : "icons__navbarBottom font-inactive"}>
                    <AiFillHome/>
                </NavLink>
                <NavLink 
                to="/History"
                className={({isActive}) => isActive ? "icons__navbarBottom bg-bottom-bar-icon font-active" : "icons__navbarBottom font-inactive"}>
                    <RiBarChart2Fill/>
                </NavLink>
                <NavLink to="/" className={({isActive}) => isActive ? "icons__navbarBottom bg-bottom-bar-icon font-active" : "icons__navbarBottom font-inactive"}>
                    <AiFillPlusCircle/>
                </NavLink>
                <NavLink to="/" className={({isActive}) => isActive ? "icons__navbarBottom bg-bottom-bar-icon font-active" : "icons__navbarBottom font-inactive"}>
                    <FaWallet/>
                </NavLink>
                <NavLink to="/" className={({isActive}) => isActive ? "icons__navbarBottom bg-bottom-bar-icon font-active" : "icons__navbarBottom font-inactive"}>
                    <HiUsers/>
                </NavLink>
            </section>
        </nav>
    )
}

export default BottomBar;