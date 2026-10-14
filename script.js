async function searchMeal() {

    const mealName = document.getElementById("mealName").value;

    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    );

    const data = await response.json();

    if (!data.meals) {
        document.getElementById("result").innerHTML =
            "<p>No recipe found.</p>";
        return;
    }

    const meal = data.meals[0];

    document.getElementById("result").innerHTML = `
        <h2>${meal.strMeal}</h2>

        <p><b>Category:</b> ${meal.strCategory}</p>

        <p><b>Area:</b> ${meal.strArea}</p>

        <img src="${meal.strMealThumb}">

        <p>
            <b>Instructions:</b><br>
            ${meal.strInstructions}
        </p>
    `;
}