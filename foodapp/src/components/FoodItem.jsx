import styles from "./fooditem.module.css";

export default function FoodItem({ food, setFoodId }) {
  function addRecipe(id) {
    setMyRecipes((prev) => [...prev, id]);
  }
  return (
    <div className={styles.itemContainer}>
      <img className={styles.image} src={food.image} alt=""></img>
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            setFoodId(food.id);
          }}
          className={styles.button}
        >
          View Recipe
        </button>
        <button
          onClick={() => {
            addRecipe(food.id);
          }}
          className={styles.button}
        >
          Save Recipe
        </button>
      </div>
    </div>
  );
}
