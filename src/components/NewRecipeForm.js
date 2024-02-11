import React from "react";

function NewRecipeForm(){
    return (
        <div className="recipe-form-container">
            <label>
                Post Your Spectactular Recipe!
            </label>
            <input className="input-field" type="text"/>
            <input className="input-field" type="text"/>
            <input className="input-field" type="text"/>
            <input className="input-field" type="text"/>
            <input className="input-field" type="text"/>
            <input className="input-field" type="text"/>
            <input className="input-field" type="text"/>
            <input className="input-field" type="text"/>
            <button>Add New Recipe</button>
        </div>
    )
}

export default NewRecipeForm;