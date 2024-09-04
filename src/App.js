
import './App.css';

import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Blog  from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import image6 from './assets/image6.png';
import image7 from './assets/image7.png';
import image8 from './assets/image8.png';
import image9 from './assets/image9.png';
import image10 from './assets/image10.png';
import { Element } from 'react-scroll';
function App() {
  return (
    <div className="App">

        <Header/>

      <Element name='section1'>
        <Profile/>
      </Element>


      <Element name='section2'>
        <div className="blog">
                <h2>My Blogs</h2>
                <p className='blog_p'>Check out my latest blog posts on Medium</p>
                <div className="blog_main">
                  {blogContains.map((b) =>( 
                    <Blog key={b.id} source={b.source} title={b.title} text={b.text} date={b.date}/>
                  ))}

          </div>
        
        </div>

      </Element>
     
      

        <div>
          <Element name="section3">
          <Contact/>
          </Element>
        </div>


      <Footer/>
    </div>
  );
}
const blogContains=[
  {id:0,source:image1,title:"Hydra Tool",text:"What's Hydra Dongle Tool?",date:"Aug 10, 2024"},
  {id:1,source:image2,title:"Fabric.js — Mastering Canvas",text:"Step by Step guide to learn canvas manipulation with Fabric.js",date:"Jun 1,2024"},
  {id:2,source:image3,title:"How to implement Discord OAuth2 in React web application?",text:"Discord OAuth2 implementation on React",date:"Jun 15, 2024"},
  {id:3,source:image4,title:"How to implement Turnstile to detect a Bot in React web application?",text:"Learn about Cloudflare’s new feature, Turnstile, and detect bots.",date:"Jun 1,2024"},
  {id:4,source:image5,title:"How to run Node.js Applications with PM2?",text:"Learn PM2 basic concept and usage.",date:"May 26, 2024"},
  {id:5,source:image6,title:"Runpod Serverless Architecture and Usage",text:"What’s runpod serverless and how to use the serverless architecture for AI?",date:"May 15, 2024"},
  {id:6,source:image7,title:"Learn serverless architecture with Cloudflare Worker",text:"What’s severless architecture and how it’s useful for developers?",date:"May 3, 2024"},
  {id:7,source:image8,title:"CI/CD Pipeline Guide with Github Actions",text:"Learn about how to make infrastructure of CI/CD in software development with Github Actions.",date:"Apr 4, 2024"},
  {id:8,source:image9,title:"Overlay with own url in React!",text:"This is a guidance to make an overlay that has own url in React with react-route-dom.",date:"Mar 24, 2024"},
  {id:9,source:image10,title:"How to build and deploy a MERN stack web application on a Linode/Debian server?",text:"Learn how to create and deploy a MERN stack web application on a Linode server running Debian. ",date:"Mar 6, 2024"},
]
export default App;
