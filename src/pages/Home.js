import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
  const [mealData, setMealData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [showResult, setShowResult] = useState(12);
  const getMealData = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchData)
      .then((res) => setMealData(res.data.meals));
  };
  useEffect(() => getMealData(), [searchData]);
  return (
    <div className="mainContent">
      <Header />
      <div className="banner-container">
        <div className="form-container">
          <form action="">
            <input
              type="text"
              id="searchInput"
              placeholder="Taper le nom d'un aliment (en anglais) ..."
              onChange={(e) => setSearchData(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="result">
        <p>Résultats</p>
        <select
          name="result"
          id="result"
          onChange={(e) => setShowResult(e.target.value)}
        >
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
          <option value="48">48</option>
          <option value="60">60</option>
        </select>
      </div>
      {/* <hr /> */}
      <div className="meal-container">
        {mealData.slice(0, showResult).map((meal, index) => (
          <Card meal={meal} key={meal.idMeal} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
