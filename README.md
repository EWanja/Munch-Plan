### 🍽️MunchPlan

MunchPlan is a simple and interactive web app that helps users discover recipes and plan their meals with ease.
Built with Vite, React, and Tailwind CSS, it offers a fast, responsive, and visually clean experience for users who want to stay organized and stress-free when it comes to meal planning.

### Features

## 🏠-- Home Page --

Welcoming hero section with a “Get Started” button that leads to recipe browsing

## 🍽️-- Recipe Management--

Browse or search recipes fetched dynamically from an API.
Advanced Search & Filters — filter recipes by dietary preferences (e.g., vegan, gluten-free).
View detailed recipe information such as title, ingredients, and instructions.
Add recipes directly to your meal planner for any selected date and meal type (breakfast, lunch, dinner).

## 📆-- Interactive Meal Planner --

View and manage meal plan in a monthly calendar grid.
Click on date to edit, or remove meals using easy-to-use modals.
Each day displays all meals added for quick overview.

## 🗒️--Meal Management --

Update meal titles and add personal notes for each planned meal.
Save edited details instantly to local storage for persistence.

## 📁--Local Storage Integration--

All planned meals are automatically saved in browser’s local storage.
Plans remain available even after refreshing or closing the browser.

## 🔗 API Integration

- Integrated with the **Spoonacular API** to fetch a wide range of recipes.
- Users can browse recipes dynamically and view detailed information such as:
  - Ingredients
  - Cooking instructions
- The app uses environment variables to store the API key securely.

## Built With

⚡ Vite
⚛️ React
🎨 Tailwind CSS for styling
🍽️ Spoonacular API — for fetching real recipe data dynamically

### 📂Folder Structure

munchplan/
│
├── public/
│ └── favicon.ico
│
├── src/
│ ├── assets/ # Project images, backgrounds, logos
│ │
│ ├── components/ # Reusable UI components and modals
│ │ ├── AddToPlannerModal.jsx
│ │ ├── EditMealModal.jsx
│ │ ├── MealDetails.jsx
│ │ ├── Navbar.jsx
│ │ └── RecipeDetails.jsx
│ │
│ ├── pages/ # Each page corresponds to a route
│ │ ├── Home.jsx
│ │ ├── BrowseRecipes.jsx
│ │ └── MealPlanner.jsx
│ │
│ ├── utils/ # API functions and helper functions
│ │ └──API.js
│ │
│ ├── App.jsx # Main app component with routing setup
│ ├── main.jsx # Entry point that renders the app
│ ├── index.css # Global styles
│
├── .gitignore
├── package.json
├── README.md
├── vite.config.js
└── tailwind.config.js

### Installation and Setup

Clone : https://github.com/EWanja/Munch-Plan.git
Navigate to project Folder : cd munchplan
Install Dependencies : npm install
Run the development Server : npm run dev
This project uses the **Spoonacular API** for fetching recipe data.

1️⃣ Create a free account on [Spoonacular](https://spoonacular.com/food-api).  
2️⃣ Copy your API key from your account dashboard.  
3️⃣ Create a `.env` file in the project root and add:

```bash
VITE_SPOONACULAR_API_KEY=your_api_key_here



Author
Created by: Edith Wanja
```
