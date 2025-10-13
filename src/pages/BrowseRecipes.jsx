import React, { useState, useEffect } from "react";
import fetchRecipes from "../utils/api";

function BrowseRecipes() {
    const [recipes, setRecipes] = useState([])
    const [selectedRecipe, setSelectedRecipe] = useState(null)

  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };
    getRecipes();
  }, []);
   
    return (
         <div className="px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Browse Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{recipe.title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Ready in {recipe.readyInMinutes} minutes | {recipe.servings} servings
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 


export default BrowseRecipes