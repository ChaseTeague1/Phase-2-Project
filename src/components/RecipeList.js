import React from "react";
import Recipe from './Recipe';

function RecipeList({recipes}){
    return (
        <div>
            <h1 className="recipe-header">RECIPES</h1>
            {
                recipes.map(recipe => (
                    <Recipe recipe={recipe}/>
                ))
            }
        </div>
    )
}

export default RecipeList;