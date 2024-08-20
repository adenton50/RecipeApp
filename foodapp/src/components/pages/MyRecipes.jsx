import { useEffect, useState } from "react";
import MainLayout from "../MainLayout";
import styles from "../fooditem.module.css";

export default function MyRecipes() {
  const [foods, setFoods] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchFood = async (recipeId) => {
    const URL = `https://api.spoonacular.com/recipes/${recipeId}/information`;
    try {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();

      return data;
    } catch (error) {
      console.error("Error fetching food data:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchAllFoods = async () => {
      const savedRecipes = localStorage.getItem("myRecipes");
      if (savedRecipes) {
        try {
          const parsedRecipes = JSON.parse(savedRecipes);

          // Fetch data for all recipes
          const fetchPromises = parsedRecipes.map((recipeId) =>
            fetchFood(recipeId)
          );
          const results = await Promise.all(fetchPromises);

          // Filter out null results (in case of errors) and update state
          setFoods(results.filter((data) => data !== null));
        } catch (error) {
          console.error("Error parsing saved recipes:", error);
        }
      }
    };

    fetchAllFoods();
  }, [API_KEY]);

  //console.log(foods);
  if (foods === null || foods === undefined) {
    return <div></div>;
  } else {
    return (
      <div>
        <MainLayout />
        <div>
          {foods.map((food) => (
            <div key={food.id}>
              <div className={styles.itemContainer}>
                <img className={styles.image} src={food.image} alt=""></img>
                <div className={styles.itemContent}>
                  <p className={styles.itemName}>{food.title}</p>
                </div>
                <div className={styles.buttonContainer}>
                  <button
                    className={styles.button}
                    onClick={() => {
                      window.open(food.sourceUrl, "_blank");
                    }}
                  >
                    View Full Recipe
                  </button>
                  <button className={styles.button}>Remove Recipe</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
