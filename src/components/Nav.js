import React from "react";
import {NavLink} from 'react-router-dom';

function Nav(){
    const navImg = {
        backgroundImage: `url("https://acing.net/wp-content/uploads/2020/09/Ingredient-Resources.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <nav style={navImg} className="nav-bar">
            <NavLink
            to="/"
            exact
            className="nav-links"
            >
                Home
            </NavLink>
            <NavLink className="nav-links" to="/recipes">View All of Our Recipes</NavLink>
            <NavLink className="nav-links" to="/recipeform">Add Your Own Recipe</NavLink>
        </nav>
    )
}

export default Nav;