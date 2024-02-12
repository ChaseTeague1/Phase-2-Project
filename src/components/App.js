import React, {useState, useEffect} from "react";
import Nav from './Nav';
import NewRecipeForm from './NewRecipeForm';
import RecipeList from './RecipeList';
import Home from './Home';
import Search from './Search';
import {Route, Switch} from 'react-router-dom';


function App(){
    const [recipes, setRecipes] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [selectedCategory, setCategory] = useState("All");

    const categories = ['All','Italian', 'Mexican','Asian','Vegetarian','Dessert','Seafood', 'American'];

useEffect(() => {
    fetch('http://localhost:3001/recipes')
    .then(res => res.json())
    .then(data => setRecipes(data))
}, [])

function onNewFormSubmit(newRecipe){
    setRecipes([...recipes, newRecipe])
}

    const recipesToDisplay = 
    recipes.filter(recipe => recipe.name.toLowerCase().includes(searchInput.toLowerCase()))
    .filter(recipe => {
        if(selectedCategory === 'All') return true;
        return recipe.category === selectedCategory;
    });

    return (
        <div className="app-container">
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/recipes"> 
                    <Search setCategory={setCategory} selectedCategory={selectedCategory} categories={categories} setSearchInput={setSearchInput} searchInput={searchInput}/>
                    <RecipeList recipes={recipesToDisplay}/>
                </Route>
                <Route path="/recipeform">
                    <NewRecipeForm onFormSubmit={onNewFormSubmit}/>
                </Route>
            </Switch>
        </div>
    )
}

export default App;