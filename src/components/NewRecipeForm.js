import React, {useState} from "react";

function NewRecipeForm({onFormSubmit}){
    const [category, setCategory] = useState("Choose Category");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [instructions, setInstructions] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [cook_time, setCooktime] = useState("");
    const [image_url, setImage] = useState("");

    function handleSubmit(event){
        const newRecipe ={
            name: name,
            description: description,
            instructions: instructions,
            ingredients: ingredients,
            cook_time: cook_time,
            category: category,
            image_url: image_url
        }
        event.preventDefault();
        fetch('http://localhost:3001/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRecipe)
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            onFormSubmit(data)
            setCategory("Choose Category");
            setName("");
            setDescription("");
            setInstructions("");
            setIngredients("");
            setCooktime("");
            setImage("")
        })
    }


    return (
        <form onSubmit={handleSubmit} className="recipe-form-container">
            <label className="form-label">
                Post Your Spectactular Recipe!
            </label>
            <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter recipe name..." className="input-field" type="text"/>
            <input onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Enter recipe description..." className="input-field" type="text"/>
            <textarea id="instructions" onChange={(e) => setInstructions(e.target.value)} value={instructions} placeholder="Enter recipe instructions..." className="input-field" type="text"/>
            <textarea id="ingredients" onChange={(e) => setIngredients(e.target.value)} value={ingredients} placeholder="Enter recipe ingredients..." className="input-field" type="text"/>
            <input onChange={(e) => setCooktime(e.target.value)} value={cook_time} placeholder="Enter recipe cook time..." className="input-field" type="text"/>
            <select onChange={(e) => setCategory(e.target.value)} value={category} className="input-field">
                <option>Choose Category</option>
                <option>Italian</option>
                <option>Asian</option>
                <option>Mexican</option>
                <option>Dessert</option>
                <option>Vegan</option>
            </select>
            <input onChange={(e) => setImage(e.target.value)} value={image_url} placeholder="Enter recipe image..." className="input-field" type="text"/>
            <button type="submit" className="input-field-button">Add New Recipe</button>
        </form>
    )
}

export default NewRecipeForm;