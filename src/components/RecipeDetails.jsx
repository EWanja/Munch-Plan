import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchRecipeById } from "../utils/api"
import AddToPlannerModal from './AddToPlannerModal'
 
function RecipeDetails(){
  const { id } = useParams()
  const navigate = useNavigate()
  const [recipe, setRecipe] = useState(null)
  const [loading, setloading] = useState(true)
  const[showModal, setShowModal] = useState(false)

  useEffect(() => {
    const loadRecipe = async () => {
   
      try {
        const data = await fetchRecipeById(id)
        setRecipe(data)
      } catch (error) {
        console.error("Error laoding recipes:" , error)
      } finally {
        setloading(false)
      }
    }
    loadRecipe()
  }, [id])

  const handleSaveMeal = (meal) => {
    const existing = JSON.parse(localStorage.getItem("mealPlanner")) || {}
    const { date, mealType } = meal
    if (!existing[date]) existing[date] = {}
    existing[date][mealType] = meal
    
    localStorage.setItem("mealPlanner", JSON.stringify(existing))
    alert(`${meal.title} added to ${mealType} on ${date}`)
  }




  if (loading) return <p>Loading recipe...</p>
  if(!recipe) return <p>Recipe not Found</p>

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-[#f8fdf7] to-[#eafbea] min-h-screen">
      
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#278a1a] hover:text-[#38c425] transition font-medium"
        >
          ← Back
        </button>
  
        <button onClick={() => setShowModal(true)}
        className="bg-[#278a1a] hover:bg-[#38c425] text-white px-6 py-3 rounded-lg"
      >
        Add to Planner
        </button>

        {showModal && (<AddToPlannerModal recipeTitle={recipe.title} onClose={() => setShowModal(false)} onSave={handleSaveMeal}/>
        )}
      </div>

      <img src={recipe.image} alt={recipe.title} />
      <h1>{recipe.title}</h1>

      <div>
        <span>🕛{recipe.readyInMinutes} mins</span>
        <span>🍽️{recipe.servings}</span>
        <span>💛Heath Score:{recipe.healthScore}</span>
      </div>

    <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
      <ul className="list-disc ml-6 mb-8 text-gray-700">
        {recipe.extendedIngredients?.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
      <p className="leading-relaxed text-gray-700 mb-10">
        {recipe.instructions
          ? recipe.instructions.replace(/<\/?[^>]+(>|$)/g, "")
          : "No instructions available."}
      </p>

      
    </div>
  )
}

export default RecipeDetails;