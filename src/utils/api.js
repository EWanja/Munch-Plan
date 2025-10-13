const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY

const fetchRecipes = async () =>{
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?number=20&apiKey=${apiKey}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch recipes");
    }
    const data = await res.json();
    return data.recipes; 
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}

export default fetchRecipes