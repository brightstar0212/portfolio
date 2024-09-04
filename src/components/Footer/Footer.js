import './footer.css';
import { Link } from 'react-scroll';
const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer_content">
            <div className="link">
                <h3>Quick Links</h3>
                <Link to='section1'>About Me</Link>
                <Link to='section2'>My Blogs</Link>
                <Link to='section3'>Contact Me</Link>
            </div>
            <div className="social">
                <h3>Social</h3>
                <Link to='https://x.com'>Twitter</Link>
                <Link to='https://www.facebook.com'>Facebook</Link>
                <Link to='https://www.linkedin.com'>LinkedIn</Link>
            </div>
            <div className="resource">
                <h3>Resources</h3>
                <Link to='https://youthdream0925.medium.com'>Blog</Link>
                <Link to='https://github.com'>Tutorials</Link>
                <Link to='https://github.com'>Open Source</Link>
            </div>
            <div className="project">
                <h3>Projects</h3>
                <Link to='https://gallerai.ai'> Gallerai Art</Link>
                <Link to='https://play.google.com/store/apps/details?id=com.imaigination.avatar'>Imaigination Avatar</Link>
                <Link to='https://hydradongle.com'>Hydra Tool</Link>
            </div>
            <div className="contacts">
                <h3>Contact</h3>
                <Link to='mailto:miklejone0212@gmail.com'>Email</Link>
                <Link to='#'>Telegram</Link>
                <Link to='#'>Discord</Link>
            </div>
            </div>
            
        </div>
    )
}
export default Footer;