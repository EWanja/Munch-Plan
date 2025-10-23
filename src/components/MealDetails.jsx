import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditMealModal from "./EditMealModal";
import MealPlanner from "../pages/MealPlanner";

function MealDetails() {
    const { date } = useParams()
    const navigate = useNavigate()

    const [meals, setMeals] = useState({})
    const [selectedMeal, setSelectedMeal] = useState(null)

    useEffect(() => {
        const storedMeals = JSON.parse(localStorage.getItem("mealPlanner")) || {}
        setMeals(storedMeals[date] || {})
    },[date])

    const handleDelete = (mealType) => {
        const storedMeals = JSON.parse(localStorage.getItem("mealPlanner")) || {}
        if (storedMeals[date]) {
            delete storedMeals[date][mealType]
            localStorage.setItem("mealPlanner", JSON.stringify(storedMeals))
            setMeals(storedMeals[date] || {})
        }
    }

    const handleSave = (updateMeal) => {
        const storedMeals = JSON.parse(localStorage.getItem("mealPlanner")) || {}
        if (!storedMeals[date]) storedMeals[date] = {}
        storedMeals[date][updateMeal.mealType] = updateMeal
        localStorage.setItem("mealPlanner", JSON.stringify(storedMeals))
        setMeals(storedMeals[date])
        setSelectedMeal(null)
    }
    
    const mealTypes = ["Breakfast", "Lunch", "Dinner"]
    const hasMeals = Object.keys(meals).length > 0


    return (
        <div className="p-6">

            <h2 className="text-center text-lg font-bold mb-6">Meals for {date}</h2>

            {hasMeals ? (
                <div className="grid md:grid-cols-3 gap-4">{mealTypes.map((type) => (
                    <div key={type} className="bg-gray-100 p-4 rounded-md shadow">
                        <h3 className="font-semibold mb-2">{type}</h3>
                        <p className="text-sm mb-3">{meals[type]?.title || "No meal added yet."}</p>

                        <div className="flex justify-between">
                            <button onClick={() => setSelectedMeal({ type, data: meals[type] || {} }) } className="bg-[#278a1a] hover:bg-[#38c425] text-white px-4 py-2 rounded-md">Edit</button>
                            <button onClick={() => handleDelete(type)} className="bg-[#8a301a] hover:bg-[#38c425] text-white px-4 py-2 rounded-md">Delete</button>
                        </div>
                    </div>
                ))}
               </div>     
            ) : (
                    <div className="text-center mt -10">
                        <p className="text-gray-600 mb-3">No Meals planned for this day</p>
                        <button onClick={() => navigate("/planner")} className="bg-[#278a1a] hover:bg-[#38c425] text-white px-4 py-2 rounded-md">Back to Planner</button>
                    </div>
            )}

            {selectedMeal && (
                <EditMealModal
                    mealType={selectedMeal.type} 
                    mealData={selectedMeal.data}
                    onClose={() => setSelectedMeal(null)}
                onSave={handleSave} />
            )}
      </div>  
    )
}

export default MealDetails