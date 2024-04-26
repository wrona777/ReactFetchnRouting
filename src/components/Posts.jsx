import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
      });
  }, []);

  if (posts.length) {
    return (
      <div>
        <h1>Posts</h1>
        <div className="posts">
          {posts.map((post) => (
            <div
              key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}...</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Posts;