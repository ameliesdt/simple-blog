import Post from '../Components/Post';
import blogData from '../Data';

const Blog = () => {
    return blogData.map ((data, index) => (
        <div>
            <Post 
            key={"Post1" + index}
            img={data.img_url}
            title={data.title}
            text={data.description}
            author={data.author}
            id={data.id}
            />
        </div>

    ));
}
 
export default Blog;
