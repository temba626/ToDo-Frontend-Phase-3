
import React from "react";
import TodoItem from "./TodoItem";
import TodoCategoryFilter from "./TodoCategoryFilter";
import TodoNewItemForm from "./TodoNewItemForm";

function TodoList ({onDeleteTodo, todos, todoCategories, categoryNames, selectedCategory, onCategorySelected, onNewTodoFormSubmit}) {

    const todoElements = todos.map((todo) => {
        const categoryId = todo.todo_category_id
        return (
            <TodoItem
                title={todo.title}
                key={todo.title}
                category={categoryNames[categoryId]}
                onDeleteTodo={onDeleteTodo}
                todoId={todo.id}
                className={todo}
            />
        )
    })

    return (
        <div>
            <TodoNewItemForm todoCategories={categoryNames} onNewTodoFormSubmit={onNewTodoFormSubmit} />
            <br></br>
            <TodoCategoryFilter todoCategories={categoryNames} selectedCategory={selectedCategory} onCategorySelected={onCategorySelected} />
            <div>{todoElements}</div>
        </div>
        )
}

export default TodoList


