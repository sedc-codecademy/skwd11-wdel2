import { useState } from "react";

export const Todos = () => {
  // const [products, setProducts] = useState([])
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Walk the dog",
      isDone: true,
    },
    {
      id: 2,
      title: "Learn react",
      isDone: false,
    },
  ]);

  // const fetchProducts = async () => {
  //   const response = await fetch('some_address');
  //   const data = await response.json()

  //   setProducts(data)
  // };

  const [todoTitle, setTodoTitle] = useState("");

  const handleAddTodo = () => {
    const todo = {
      id: Date.now(),
      title: todoTitle,
      isDone: false,
    };

    // const copyOfTodos = [...todos];
    // copyOfTodos.push(todo);
    // setTodos(copyOfTodos);

    // same as above but shorter
    setTodos([...todos, todo]);
    setTodoTitle("");
  };

  /**
   * 1. Create handleChangeTitleName to get the value of the input
   * 2. Create new state property for the title
   */
  const handleChangeTitleName = (event) => {
    const value = event.target.value;
    setTodoTitle(value);
  };

  /**
   * 1. handle function for deleting todo
   * 2. i will remove the todo by id
   * 3. remove the the whole todo object of the todos array
   */

  const handleDeleteTodo = (todoID) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoID);

    setTodos(filteredTodos);
  };

  const handleFinishTodo = (todoID) => {
    const mappedTodos = todos.map((todo) => {
      if (todo.id === todoID) {
        return {
          ...todo,
          // title: todo.title,
          // id: todo.id,
          isDone: true,
        };
      }
      return todo;
    });

    setTodos(mappedTodos);
  };

  return (
    <>
      <h1>This is the todos list</h1>
      <section>
        {todos.map((todo) => (
          <div style={{ border: "1px solid black" }} key={todo.id}>
            <h3>{todo.title}</h3>
            <p
              style={{
                color: todo.isDone ? "green" : "red",
              }}
            >
              {todo.isDone ? "Todo is done" : "Todo is not done"}{" "}
            </p>

            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            <button onClick={() => handleFinishTodo(todo.id)}>Finish</button>
          </div>
        ))}
      </section>

      <hr />
      <section>
        <input
          onChange={(event) => handleChangeTitleName(event)}
          type="text"
          placeholder="Enter todo name"
          value={todoTitle}
        />
        <button onClick={() => handleAddTodo()}>Add Todo</button>
      </section>
    </>
  );
};
