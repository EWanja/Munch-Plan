import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditMealModal from "./EditMealModal";

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
        <div>

            <h2 className="">Meals for {date}</h2>

            {hasMeals ? (
                <div className="">{mealTypes.map((type) => (
                    <div key={type} className="">
                        <h3 className="">{type}</h3>
                        <p className="">{meals[type]?.title || "No meal added yet."}</p>

                        <div className="">
                            <button onClick={() => setSelectedMeal({ type, data: meals[type] || {} }) } className="">Edit</button>
                            <button onClick={() => handleDelete(type)} className="">Delete</button>
                        </div>
                    </div>
                ))}
               </div>     
            ) : (
                    <div className="">
                        <p className="">No Meals planned for this day</p>
                        <button onClick={() => navigate("/planner")} className="">Back to Planner</button>
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