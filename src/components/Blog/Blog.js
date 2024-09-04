import './blog.css';

const Blog = ({source,title,text,date}) =>{
    return(

    <div className="blog_content">
        <div className="blog_content_img">
            <img src={source} alt={title}/>
        </div>
        <div className="blog_content_text">
            <div className="blog_content_text_title">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <div className="blog_content_text_date">
                <p>{date}</p>
                <a href="https://youthdream0925.medium.com/hydra-tool-4afdf5cb6fa6">Read More &#8594;</a>
            </div>
        </div>
    </div>
);
}
export default Blog;