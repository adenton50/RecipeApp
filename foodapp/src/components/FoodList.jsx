import FoodItem from "./FoodItem";
import styles from "./foodlist.module.css";

export default function FoodList({
  foodData,
  setFoodId,
  myRecipes,
  setMyRecipes,
}) {
  return (
    <div className={styles.grid}>
      {foodData.map((food) => (
        <FoodItem
          setFoodId={setFoodId}
          key={food.id}
          food={food}
          myRecipes={myRecipes}
          setMyRecipes={setMyRecipes}
        />
      ))}
    </div>
  );
}
