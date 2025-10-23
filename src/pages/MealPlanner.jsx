import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import MealDetails from "../components/MealDetails";

function MealPlanner() {
    const[currentDate, setCurrentDate] = useState(new Date())
    const [meals, setMeals] = useState({})
    const navigate = useNavigate()
    

    useEffect(() => {
    setMeals(JSON.parse(localStorage.getItem("mealPlanner")) || {});
  }, []);


    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

  const formatDate = (day) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(
      2,
      "0"
    )}`

  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const changeMonth = (offset) => setCurrentDate(new Date(year, month + offset, 1))


    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-center mb-4 gap-4">Meal Planner</h2>

            <div className=" flex justify-center items-center mb-4 gap-4">
        <button onClick={() => changeMonth(-1)} className="bg-gray-200 px-3 py-1 rounded-md">
          {"<"}
        </button>
        <span className="font-semibold text-lg">
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </span>
        <button onClick={() => changeMonth(1)} className="bg-gray-200 px-3 py-1 rounded-md">
          {">"}</button>
            </div>
          <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: daysInMonth }, (_, i) => {
            const date = formatDate(i + 1);
            const hasMeals = meals[date];
            return (
              <div
                key={date}
                onClick={() => navigate(`/planner/${date}`)}
                className=" border rounded-lg p-2 h-24 flex flex-col justify-between cursor-pointer hover:bg-[#b6eeaf] "
              >
                <span className="font-semibold">{i + 1}</span>
                {hasMeals ? (
                  <p className="text-xs text:[#278a1a] space-y-1">
                    {Object.keys(hasMeals).map((mealType) => (
                      <span key={mealType}className="px-2 py-0.5 rounded-md">
                        {mealType}
                      </span>
                    ))}
                  </p>
                ) : (
                  <p className="text-xs text-gray-400"> + </p>
                
                )}
              </div>
            )
          })}
        </div>
        </div>        
     )
}

export default MealPlanner