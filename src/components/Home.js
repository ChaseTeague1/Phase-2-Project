import React from "react";

function Home(){
    return(
        <div className="home">
            <h1 className="home-title">Recipe Finder</h1>
            <p className="home-p">--------------- <em>All You Can Find Recipes</em> ---------------</p>
            <h5 className="home-h5">Search for a beloved recipe to cook or add your very own recipe to the collection for others to enjoy!</h5>
            <p className="p-left"><span>Giving people in the kitchen the confidence to be able to cook anything that they may desire</span></p>
            <div className="home-div"><p className="div-p">This Website enables users to navigate through a list of provided recipes and also add there own recipe that others could enjoy</p></div>
            <p className="p-right"><span>Be sure to search through everything and enjoy your visit here at Recipe Finder</span></p>
        </div>
    )
}

export default Home;