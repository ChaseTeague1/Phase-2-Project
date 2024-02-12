import React from "react";
import Recipe from './Recipe';

function RecipeList({recipes}){

    return (
        <div className="card-container">
            {
                recipes.map(recipe => (
                    <Recipe key={recipe.name} recipe={recipe}/>
                ))
            }
        </div>
    )
}

export default RecipeList;