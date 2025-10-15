import React, { useState, useEffect } from "react";
import  { useNavigate } from "react-router-dom"

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
        <div>
            <h2>Meal Planner</h2>

            <div className="">
        <button onClick={() => changeMonth(-1)} className="">
          {"<"}
        </button>
        <span className="">
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </span>
        <button onClick={() => changeMonth(1)} className="">
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
              className=""
            >
              <span className="">{i + 1}</span>
              <p>
                {hasMeals ? "Meals Added" : "+"}
              </p>
            </div>
          );
        })}
            </div>
        </div>
         
     )
}

export default MealPlanner