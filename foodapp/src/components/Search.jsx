import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_API_KEY;

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");
  const fetchFood = async (e) => {
    e.preventDefault();
    const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    //console.log(data.results);
    setFoodData(data.results);
    setQuery("");
    //hello
  };
  return (
    <div className={styles.searchContainer}>
      <form onSubmit={fetchFood}>
        <input
          className={styles.input}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
        ></input>
        <button className={styles.searchButton}>Search</button>
      </form>
    </div>
  );
}
