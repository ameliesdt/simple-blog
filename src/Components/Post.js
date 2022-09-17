import { Link, useParams } from "react-router-dom";
import './Post.css';

   
const Post = (props) => {

    return  (
        <div className="gridContainer">
            <div className="postContainer">
                <img src={props.img}/>
                <h2>{props.title}</h2>
                <Link to={`/${props.id}`} className="linkBtn">Read more</Link>
            </div>
        </div>

    );
}
 
export default Post;