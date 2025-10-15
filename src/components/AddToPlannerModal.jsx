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

    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-96 shadow-lg relative">
            <h3>Add to Meal Planner</h3>

            <label>Title</label>
            <input type="text" value={recipeTitle} readOnly placeholder="Enter meal Title" />
            
            {/* Meal type options*/}
            <div>
                <label> Meal Type</label>
                <select value={mealType} onChange={(e) => setMealType(e.target.value)} >
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                </select>
            </div>

            {/* Date options*/}
            <div>
                <label>Select Date</label>
                    <select value={selectedDate} onChange={(e) =>
                        setSelectedDate(e.target.value)}>
                        <option value="">Choose Date</option>
                        {getCurrentMonthDates().map((date)=>(
                            <option key={date} value={date}>{date}</option>
                        ))}
                </select>
            </div>
            
            {/* Add Note*/}
            <div>
                <label>Add A Note</label>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Add notes"></textarea>
            </div>

            <div>
                <button onClick={handleSave}>
                    Save Meal
                </button>

                    <button onClick={onClose}>
                    Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddToPlannerModal