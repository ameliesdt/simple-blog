import './Home.css';
import '../Pages/Blog';
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="homeContainer">
          <div className="homeHero"></div>
          <div className="homeHeading">
            <h1>Welcome to my simple Blog</h1>
            <Link to="/Blog" className="homeBtn">Go to articles</Link>
          </div>

        </div>
      );
}
 
export default Home;