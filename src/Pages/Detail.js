import { useParams } from "react-router-dom";
import './Detail.css';
import blogData from '../Data';

const Detail = () => {
    let params = useParams();

    let post = blogData[params.id];
    return (
        <div className="detailContainer">
            <img className="detailImg"src={post.img_url} alt="img"/>
            <div className="textContainer">
              <div className="titleContainer">
                <h2>{post.title}</h2>
                <p>{post.published_date}</p>
              </div>
              <p>{post.description}</p>
              <p className="authorTag">By {post.author}</p>
            </div>
        </div>
      );
}
 
export default Detail;