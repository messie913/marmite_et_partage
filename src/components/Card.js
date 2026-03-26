import React, { useState } from "react";

const Card = ({ meal }) => {
  //   const [liked, setLiked] = useState(false);
  const [liked, setLiked] = useState(() => {
    let saved = localStorage.getItem(`like-${meal.idMeal}`);
    return saved === "true";
  });

  //   const [items, setItems] = useState([]);

  const toggleLike = () => {
    const nextState = !liked;
    setLiked(nextState);
    console.log("Like");
    if (nextState) {
      localStorage.setItem(`like-${meal.idMeal}`, "true");
    } else {
      localStorage.removeItem(`like-${meal.idMeal}`);
      console.log("Supprimé du storage :", meal.idMeal);
    }
    // setLiked(!liked);
  };
  return (
    <div className="card">
      <div className="card-header">
        <h4>{meal.strMeal}</h4>
        <p>Origin : {meal.strArea}</p>
      </div>
      <img src={meal.strMealThumb} alt="Logo Cooking" />
      <div className="card-body">
        <h3>Instructions (en anglais) :</h3>

        <p>{meal.strInstructions} </p>
        <a href={meal.strYoutube} target="_blank" rel=" noreferrer">
          Voir les intructions sur Youtube{" "}
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>

      <div className="card-footer">
        <button onClick={() => window.open(meal.strSource, "_blank")}>
          Voir la recette complète
        </button>

        <i
          className={
            liked ? "fa-solid fa-heart likeBtn" : "fa-regular fa-heart likeBtns"
          }
          onClick={() => toggleLike()}
          //   onChange={(e) => setLiked(true)}
        ></i>
      </div>
    </div>
  );
};

export default Card;
