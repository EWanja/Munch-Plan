import axios from "axios";

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY
const BASE_URL = 'https://api.spoonacular.com/recipes';


    export const getRandomRecipes = async (number = 20) => {
        try {
            const res = await axios.get(`${BASE_URL}/random`, {
                params: {
                    number,
                    apiKey: API_KEY,
                },
            });
            return res.data.recipes; 
        } catch (error) {
            console.error("Error fetching random recipes:", error);
            return [];
        }
    };

    
    export const  getFilteredRecipes = async ({ query, cuisine, diet, intolerances }) => {
        try {
            const res = await axios.get(`${BASE_URL}/complexSearch`, {
                params: {
                    apiKey: API_KEY,
                    query: query || '',
                    cuisine: cuisine || '',
                    diet: diet || '',
                    intolerances: intolerances || '',
                    addRecipeInformation: true,
                    number: 15,
                },
            });
            return res.data.results;
        } catch (error) {
            console.error("Error fetching filtered recipes:", error);
            return [];
        }
};
    
export const fetchRecipeById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}/information`, {
      params: {
        apiKey: API_KEY,
        includeNutrition: true, 
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    throw error;
  }
};

