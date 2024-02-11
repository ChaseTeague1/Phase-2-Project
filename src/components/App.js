import React, {useState, useEffect} from "react";
import Nav from './Nav';
import NewRecipeForm from './NewRecipeForm';
import RecipeList from './RecipeList';

function App(){
    const [recipes, setRecipes] = useState([]);

useEffect(() => {
    fetch('http://localhost:3001/recipes')
    .then(res => res.json())
    .then(data => setRecipes(data))
})
    return (
        <div>
            <h1>Hello from App.js</h1>
            <Nav />
            <NewRecipeForm/>
            <RecipeList recipes={recipes}/>
        </div>
    )
}

export default App;