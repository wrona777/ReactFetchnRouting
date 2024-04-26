import { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((res) => {
        setComments(res);
      });
  }, []);

  if (comments.length) {
    return (
      <div>
        <h1>Comments</h1>
        <div className="posts">
          {comments.map((comment) => (
            <div className="comment" key={comment.id}>
              <h4>{comment.name}</h4>
              <div className="email">{comment.email}</div><br></br>
              <div className="body">{comment.body}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Comments;