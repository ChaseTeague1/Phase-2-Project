import React, {useState} from "react";

function Recipe({recipe}){
const [details, setDetails] = useState(false);

    function handleClick(){
        setDetails(details => !details)
    }

    return (
        <div className="card">
            <h2>{recipe.name}</h2>
            {
                details ? (
                    <div className="detail-list">
                        <label>
                            <strong>Instructions</strong>
                            <p>{recipe.instructions}</p>
                        </label>
                        <label>
                            <strong>Ingredients</strong>
                            <p>{recipe.ingredients}</p>
                        </label>
                        <label>
                            <strong>Category</strong>
                            <p>{recipe.category}</p>
                        </label>
                    </div>
                ) : (
                    <>
                        <p>{recipe.description}</p>
                        <img src={recipe.image_url} />
                    </>
                )
            }
            <p>Cook Time: {recipe.cook_time}</p>
            <button onClick={handleClick} >{details ? "Go Back" : "Show Recipe"}</button>
        </div>
    )
}

export default Recipe;