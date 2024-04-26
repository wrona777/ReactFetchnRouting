import './App.css';
import { Routes, Route, Link, Router} from "react-router-dom";
import Posts from './components/Posts';
import Home from './components/Home';
import Comments from './components/Comments';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <nav class="NavBar">
      <Link to ="/" >Home | </Link>
      <Link to ="/posts">Posts | </Link>
      <Link to ="/comments">Comments | </Link>
      <Link to ='/todos'>To do's</Link>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
    </div>
  );
}

export default App;