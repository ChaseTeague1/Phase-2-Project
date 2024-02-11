import React from "react";

function Recipe({recipe}){
    return (
        <div className="card">
            <h2>{recipe.name}</h2>
            <img src={recipe.image_url} />
            <button>Show recipe</button>
        </div>
    )
}

export default Recipe;