import { createContext } from "react";
import { useState } from "react";

const TodoContext = createContext();

//Provider
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, title: "some Title", description: "some description" },
    { id: 2, title: "some Title", description: "some description" },
    { id: 3, title: "some Title", description: "some description" },
    { id: 4, title: "some Title", description: "some description" },
    { id: 5, title: "some Title", description: "some description" },
  ]);
  return <TodoContext.Provider value={{todos}}>{children}</TodoContext.Provider>;
};

export default TodoContext;
