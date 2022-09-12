import React, {useState, useContext} from "react";
import { UserContext } from "./UserContext";

function TodoNewItemForm({ todoCategories, onNewTodoFormSubmit}) {
    const [newItemTitle, setNewItemTitle] = useState("")
    const [newItemCategoryId, setNewItemCategoryId] = useState("")
    const [newItemUserEmail, setNewItemUserEmail] = useState("")
    const {user, setUser} = useContext(UserContext);

    const categoriesWithoutAll = todoCategories.filter((category) => (category !== "All"))
    const options = categoriesWithoutAll.map((category) => {
        return (
            <option key={category} value={category}>{category}</option>
          )
    })

    function handleSelectedCategory(event) {
        setNewItemCategoryId(todoCategories.indexOf(event.target.value))
    }

    function handleTitleChange(event) {
        setNewItemTitle(event.target.value)
    }

    function handleEmailChange(event) {
        setNewItemUserEmail(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()

        fetch("http://localhost:9292/todos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: newItemTitle,
              todo_category_id: newItemCategoryId,
              email_address: newItemUserEmail,
              completed: false
            }),
          })
            .then((r) => r.json())
            .then((newTodo) => {
                onNewTodoFormSubmit(newTodo);
                setNewItemTitle("");
            });
           
    }
   
    return (
        <div>
        <form onSubmit={handleSubmit} className="new-todo-form">
            <label>
                Title: <input type="text" onChange={handleTitleChange} value={newItemTitle}></input>
            </label>
            <label>
                Email: <input type="email" onChange={handleEmailChange} value={newItemUserEmail}></input>
            </label>
                <label> Category: <select onChange={handleSelectedCategory}>
                <option selected disabled hidden>Choose a Category</option>
                        {options}
                    </select>
                </label>
            <input type="submit" value="Add Todo"></input>
        </form>
       
        </div>
    )
    
}

export default TodoNewItemForm;