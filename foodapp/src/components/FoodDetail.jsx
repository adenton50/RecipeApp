import { useEffect, useState } from "react";
import styles from "./fooddetail.module.css";
import ItemList from "./ItemList";
export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      //console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    foodId !== "" ? fetchFood() : setIsLoading(true);
  }, [foodId]);
  return (
    <div>
      {foodId === "" ? (
        <div></div>
      ) : (
        <div className={styles.recipeCard}>
          <h1 className={styles.recipeName}>{food.title}</h1>

          <img className={styles.image} src={food.image}></img>
          <div className={styles.recipeDetails}>
            <span>
              ⏱️<strong>{food.readyInMinutes} Minutes</strong>
            </span>
            <span>
              👨‍👩‍👧‍👦<strong> Serves: {food.servings}</strong>
            </span>
            <span>
              <strong>
                {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-vegetarian"}
              </strong>
            </span>
            <span>
              <strong>{food.vegen ? "🐄 Vegan" : ""}</strong>
            </span>
          </div>
          <div>
            💲<span>{Math.round(food.pricePerServing / 100)} Per Serving</span>
          </div>
          <h2>Ingredients</h2>
          <ItemList food={food} isLoading={isLoading} />
          <h2>Instructions</h2>
          <div className={styles.recipeInstructions}>
            <ol>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                food.analyzedInstructions[0].steps.map((step) => (
                  <li>{step.step}</li>
                ))
              )}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
