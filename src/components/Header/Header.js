import './header.css';
import avatar from '../../assets/avatar.png';
import { Link } from 'react-scroll';
const Header = () => {
    return(

            <div className="header-content">
                <div className="header-content_avatar">
                    <div>
                    <img src={avatar} alt="avatar" className="header-img"/>
                    <p>Liu Jian Hua</p>
                    </div>
                </div>
                <div className="header-content_title">
                    <Menu/>
                </div>
            </div>
       
    )
}
const Menu = () =>{
    return(
    <div>
        <Link to="section1">About Me</Link>
        <Link to="section2">My Blogs</Link>   
        <Link to="section3"  >Contact Me</Link>   
    </div>)
}
export default Header;