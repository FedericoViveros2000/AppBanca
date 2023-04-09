import {AiFillBell} from 'react-icons/ai';
const NavBarDetailUser = () => {
    return (
        <header className="container__header">
            <ul className="container__header--info">
                <li>
                    <span className='text-thin'>Good Morning</span>
                    <p className='text-bold'>Jose Viveros</p>
                </li>
                <li className='container__header--notification'>
                    <p className='icons'>
                        <AiFillBell/>
                    </p>
                    <figure className='img-user'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEbRQ__k2EYW6KuKOGDuoftyTVDlxJ_lFv8lzXrNixMg&s" alt="" />
                    </figure>
                </li>
            </ul>
        </header>
    )
}

export default NavBarDetailUser;