import React from "react";
const RecipeCard = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;
    
    return (
        <div className="card">
            <img
                src={strMealThumb}
                alt={strMeal}
                className="card-image"
            />
            <div className="card-body">
                <span className="category">{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank" className="relative inline-flex items-center px-3 py-2 rounded-md text-sm font-medium border border-transparent shadow-sm bg-orange-600 text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">Instructions</a>
            </div>
        </div>
    )
};

export default RecipeCard
