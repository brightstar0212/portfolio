/* eslint-disable jsx-a11y/iframe-has-title */
import './contact.css';

// import google from '../../assets/google.PNG'

const Contact=()=>{
    return(
        
             <div className="contact_content">
                <div className="contact_main">
                <h2>Contact Me</h2>
                <p>Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
                <form className='contact_send'>
                <div className="email">
                    <label>Email</label>
                    <input type='email' placeholder="example@email.com"/>
                </div>
                <div className="email">
                    <label>Subject</label>
                    <input  placeholder="Subject"/>
                </div>
                <div className="email">
                    <label>Message</label>
                    <textarea placeholder="Your Message"/>
                </div>
                <button type='submit'>Send Message</button>
                </form>
                
            </div>
                <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11158.549621502469!2d-84.39709158024047!3d33.74886372725148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1725279981391!5m2!1sen!2sus"  style={{"border":0} }  loading="lazy" ></iframe>
                </div>


            </div>

           

        
        
    );
}
export default Contact;