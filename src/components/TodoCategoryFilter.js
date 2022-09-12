import React from "react";


function TodoCategoryFilter({ todoCategories, selectedCategory, onCategorySelected }) {
   
   
    const categoryButtons = todoCategories.map((category) => {
        const className = (category === selectedCategory ? "selected" : null)
       
        return (<button
            key={category}
            onClick={() => (onCategorySelected(category))}
            className={className}
            >
          {category}
          </button>)
    })
    return <div> {categoryButtons} </div>   
}

export default TodoCategoryFilter;
