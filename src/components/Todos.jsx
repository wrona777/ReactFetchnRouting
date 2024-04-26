import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => {
        setTodos(res);
      });
  }, []);

  if (todos.length) {
    return (
      <div>
        <h1>To do's</h1>
        <div className="todos">
          {todos.map((todo) => (
            <div className="todo" key={todo.id}>
                <h3>{todo.title}</h3>
                <li>{todo.completed.toString()}</li>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Todos;