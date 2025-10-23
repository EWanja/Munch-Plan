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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-96 shadow-lg relative">
                <h3 className="text-lg font-semibold mb-4 text-center">Edit {mealType}</h3>

                < div className="mb-3">
                    <label className="text-sm font-medium mb-1">Meal Title</label>
                    <input type="text" placeholder="Enter a Meal Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border rounded p-2 bg-gray-100" />
                
                </div>

                <div className="mb-3">
                    <label className="text-sm font-medium mb-1">Notes</label>
                    <textarea placeholder="Add Notes" value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full border rounded-md p-2" />
                </div>
                
                
                <div className="flex justify-end gap-3 mt-4">
                    <button onClick={onClose} className="bg-[#278a1a] hover:bg-[#38c425] text-white px-4 py-2 rounded-md">Cancel</button>
                    <button onClick ={handleSave} className="bg-[#278a1a] hover:bg-[#38c425] text-white px-4 py-2 rounded-md">Save Meal</button>
                </div>
            </div>      
         </div>
     )
} 

export default EditMealModal