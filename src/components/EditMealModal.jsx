import React, { useState } from "react";

function EditMealModal({ mealType, mealData, onClose, onSave }) {
    const [title, setTitle] = useState(mealData?.title || "")
    const [notes, setNotes] = useState(mealData?.notes || "")
    
    const handleSave = () => {
        if (!title.trim()) {
            alert("Please enter a meal title")
            return
        }

        const updatedMeal = {
            mealType,
            title,
            notes,
        }

        onSave(updatedMeal)
        onSave()

    }

    return (
        <div className="">
            <div className="">
                <h2 className="">Edit {mealType}</h2>

                <div>
                    <label className="">Meal Title</label>
                    <input type="text" placeholder="Enter a Meal Title" value={title} onChange={(e) => setTitle(e.target.value)} className="" />
                
                </div>

                <div className="">
                    <label className="">Notes</label>
                    <textarea placeholder="Add Notes" value={notes} onChange={(e) => setNotes(e.target.value)} className="" />
                </div>
                
                
                <div className="">
                    <button onClick={onClose} className="">Cancle</button>
                    <button onClick ={handleSave} className="">Save Meal</button>
                </div>
            </div>      
         </div>
     )
} 

export default EditMealModal