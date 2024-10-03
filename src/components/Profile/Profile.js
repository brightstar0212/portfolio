import "./profile.css";
import proImg from "../../assets/8.jpg";
import { Link } from "react-scroll";
const Profile = () => {
  return (
    <div className="profile-section">
      <div className="profile-content">
        <div className="profile-content_img">
          <img src={proImg} alt="profileImage" />
        </div>
        <div className="profile-content_contain">
          <div className="profile-content_text">
            <h2>FullStack Developer & Good Person</h2>
            <p>
              Passionate and skilled Full-Stack Developer with extensive
              experience in building dynamic, responsive, and user-centric web
              applications. Proficient in Python for backend development,
              leveraging Django and Flask to create robust APIs and scalable
              server-side logic. Expert in JavaScript with a focus on Node.js
              for efficient backend services and React/Next.js for building
              modern, interactive, and high-performance front-end applications.
            </p>
            <div className="content_btn">
              <a className="download" href="/liu-jian-hua/liu-jian-hua.pdf">
                Download CV
              </a>
              <Link className="contact" to="section3">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
