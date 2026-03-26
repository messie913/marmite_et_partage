import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import Card from "../components/Card";

const Favorites = () => {
  const [favData, setFavData] = useState([]);
  let keys = Object.keys(localStorage).filter((key) => key.startsWith("like"));
  console.log(favData);
  // [] signifie que ça ne tourne qu'UNE FOIS au montage du composant
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Prépare tous les appels API
        const promises = keys.map((key) => {
          const id = key.replace("like-", ""); // On récupère juste l'ID
          return axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
          );
        });

        // On attend que TOUTES les promesses soient tenues
        const results = await Promise.all(promises);

        // On extrait les données des repas et on met à jour le state UNE SEULE FOIS
        const meals = results.map((res) => res.data.meals[0]);
        setFavData(meals);
      } catch (error) {
        console.error("Erreur lors du chargement des favoris", error);
      }
    };

    if (keys.length > 0) {
      fetchData();
    }
  }, []);
  return (
    <div className="mainFavorites">
      <Header />
      <h1>Mes recettes favorites</h1>
      <div className="meal-container">
        {favData.map((meal) => (
          <Card meal={meal} key={meal.idMeal} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
