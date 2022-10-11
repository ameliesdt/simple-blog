import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Nav from './Components/Nav';
import Detail from './Pages/Detail';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Nav />
          <div className="mainContainer">
            <div className="gridContainer">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/Blog" element={<Blog />}/>
              <Route path="/:id" element={<Detail />}/>
            </Routes>
            </div>
          </div>  
          </div>
    </BrowserRouter>


  );
}

export default App;


