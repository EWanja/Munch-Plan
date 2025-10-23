import React, { useState } from "react";

function AddToPlannerModal({ recipeTitle, onClose }) {
    const [mealType, setMealType] = useState("")
    const [selectedDate, setSelectedDate] = useState("")
    const [notes, setNotes] = useState("")
    
    const getCurrentMonthDates = () => {
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth()
        const daysMonth = new Date(year, month + 1, 0).getDate()

    const dates = []
    for (let day = 1; day <= daysMonth; day++) {
        const date = new Date(year, month, day)
        dates.push(date.toISOString().split("T")[0])
    }
    return dates;
    }
    
    const handleSave = () => {
        if (!mealType || !selectedDate) {
            alert("Please select meal type and date")
            return
        }

        const newMeal = {
            title: recipeTitle,
            notes,
        }

        const storedPlanner = JSON.parse(localStorage.getItem("mealPlanner")) || {}

        if (!storedPlanner[selectedDate] || typeof storedPlanner[selectedDate] !== "object") {
            storedPlanner[selectedDate] = {}
        }

        storedPlanner[selectedDate][mealType] = newMeal

         localStorage.setItem("mealPlanner", JSON.stringify(storedPlanner));
        
        alert(`${recipeTitle} added to ${mealType} on ${selectedDate}!`)

        
        onClose()
    }



    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-96 shadow-lg relative">
            <h3 className="text-lg font-semibold mb-4 text-center">Add to Meal Planner</h3>

            <label className="text-sm font-medium mb-1">Title</label>
            <input type="text" value={recipeTitle} readOnly placeholder="Enter meal Title" className="w-full border rounded p-2 bg-gray-100" />
            
            {/* Meal type options*/}
            <div className="mb-3">
                <label className="text-sm font-medium mb-1"> Meal Type</label>
                    <select value={mealType} onChange={(e) => setMealType(e.target.value)} className="w-full border rounded-md p-2" >
                        <option value="">Select Meal Type</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                </select>
            </div>

            {/* Date options*/}
            <div className="mb-3">
                <label className="text-sm font-medium mb-1">Select Date</label>
                    <select value={selectedDate} onChange={(e) =>
                        setSelectedDate(e.target.value)} className="w-full border rounded-md p-2">
                        <option value="">Choose Date</option>
                        {getCurrentMonthDates().map((date)=>(
                            <option key={date} value={date}>{date}</option>
                        ))}
                </select>
            </div>
            
            {/* Add Note*/}
            <div className="mb-3">
                <label className="text-sm font-mdeium mb-1">Add A Note</label>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Add notes" className="w-full border rounded-md p-2"></textarea>
            </div>

            <div className="flex justify-end gap-3 mt-4">
                <button onClick={handleSave} className="bg-[#278a1a] hover:bg-[#38c425] text-white px-4 py-2 rounded-md">
                    Save Meal
                </button>

                    <button onClick={onClose} className="bg-[#278a1a] hover:bg-[#38c425] text-white px-4 py-2 rounded-md">
                    Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddToPlannerModal