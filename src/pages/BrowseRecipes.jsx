import React, { useState, useEffect } from "react";
import { getRandomRecipes } from "../utils/api";
import { getFilteredRecipes } from "../utils/api";

function BrowseRecipes() {
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState("")
  const [cuisine, setCuisine] = useState("")
  const [diet, setDiet] = useState("")
   const [intolerance, setIntolerance] =useState("")

  useEffect(() => {
    const loadRecipes = async () => {
      const data = await getRandomRecipes();
      setRecipes(data);
    };
    loadRecipes();
  }, []);
   
    return (
      <div className="px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Browse Recipes</h2>
        <form
        className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10 bg-white p-4 rounded-lg shadow-md"
      >
        <input
          type="text"
          placeholder="Search recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
          />
          <select
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/5"
        >
          <option value="">Cuisine</option>
          <option value="African">Italian</option>
          <option value="Mexican">Mexican</option>
          <option value="Chinese">Chinese</option>
          <option value="Indian">Indian</option>
          <option value="American">French</option>
          <option value="Italian">Chinese</option>
        </select>
          </form>
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