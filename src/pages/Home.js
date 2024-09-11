import React, { useState, useEffect } from 'react';

import 'flowbite'

const MealList = () => {
  const [categories, setCategories] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');

  const [meals, setMeals] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [defaultImages, setDefaultImages] = useState([]);

  const [selectedMeal, setSelectedMeal] = useState(null); // new state

  const [recipe, setRecipe] = useState(null); // new state


  useEffect(() => {

    async function fetchCategories() {

      try {

        const response = await fetch('https://themealdb.com/api/json/v1/1/categories.php');

        const data = await response.json();

        setCategories(data.categories);

      } catch (error) {

        console.error(error);

      }

    }

    fetchCategories();


    async function fetchDefaultImages() {

      try {

        const response = await fetch('https://themealdb.com/api/json/v1/1/filter.php?c=Beef');

        const data = await response.json();

        setDefaultImages(data.meals);

      } catch (error) {

        console.error(error);

      }

    }

    fetchDefaultImages();

  }, []);


  const handleSearch = (event) => {

    event.preventDefault();

    setSearchQuery(event.target.value);

  };


  const handleSubmit = async (event) => {

    event.preventDefault();

    try {

      const response = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);

      const data = await response.json();

      if (data.meals == null) {

        alert(`Oops there is no ${searchQuery} but you can search for your fav dish`) 

        searchQuery = setSearchQuery('');

      }

      setMeals(data.meals);

      setSearchQuery('');

    } catch (error) {

      console.error(error);

    }

  };


  const handleCategoryClick = async (category) => {

    setSelectedCategory(category);  

    try {

      const response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`);

      const data = await response.json();

      setMeals(data.meals);

    } catch (error) {

      console.error(error);

    }

  };


  const handleCardClick = async (meal) => {

    setSelectedMeal(meal);

    try {

      const response = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);

      const data = await response.json();

      setRecipe(data.meals[0]);

    } catch (error) {

      console.error(error);

    }

  };
  
  return (
    <>
     ieufhiwehfiwehfiewgu
</>
  );
};

export default MealList;