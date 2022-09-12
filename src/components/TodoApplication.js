import React, {useState, useEffect, useContext} from "react"
import TodoList from "./TodoList"
import "./TodoApplication.css";
import { UserContext } from "./UserContext";


function TodoApplication() {
  const [todos, setTodos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [todoCategories, setTodoCategories] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);
  const {user, setUser} = useContext(UserContext);
  
  useEffect(() => {
    fetch("http://localhost:9292/todos")
      .then((r) => r.json())
      .then(function(data) {
        setTodos(data.filter((todo)=>(todo.user_id === user.id)))});
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/todo_categories")
      .then((r) => r.json())
      .then(function(data) {
        setTodoCategories(data)
        const categories_arr = data.map(e => e.name)
        categories_arr.unshift("All")
        setCategoryNames(categories_arr)});
  }, []);



  function handleDeleteTodo(key) {
    setTodos(todos.filter((element) => (element.id !== key)))
  }

  function handleCategorySelected(category) {
    setSelectedCategory(category)
  }

  function addNewTodo(newTodo) {
    setTodos([...todos, newTodo])
  }
  


  const selectedCategoryObj = todoCategories.find(obj => {
    return obj.name === selectedCategory
  })

  let selectedTodos = []
  if (selectedCategory === "All") {
    selectedTodos = todos
  } else {
    selectedTodos = todos.filter((todo) => 
    (todo.todo_category_id === selectedCategoryObj.id))
  }

  return (
    <div className="App">
      <h2>Todo List</h2>
      <TodoList onDeleteTodo={handleDeleteTodo} todos={selectedTodos} todoCategories={todoCategories} categoryNames={categoryNames} selectedCategory={selectedCategory} onCategorySelected={handleCategorySelected} onNewTodoFormSubmit={addNewTodo}></TodoList>
      </div>

  );
}

export default TodoApplication;