// forward slashes let you comment things
function suggestFood() {
    const foodList = document.getElementById('food-list');
    const suggestionOutput = document.getElementById('suggestion-output');

    const selectedFood = foodList.value;

    const suggestions = {
        pizza: ["Pepperoni Pizza", "Margherita Pizza", "Veggie Pizza", "BBQ Chicken Pizza"],
        burger: ["Cheeseburger", "Veggie Burger", "Bacon Burger", "Chicken Burger"],
        tacos: ["Beef Tacos", "Chicken Tacos", "Pork Tacos", "Veggie Tacos"]
    };

    if (selectedFood) {
        const randomIndex = Math.floor(Math.random() * suggestions[selectedFood].length);
        suggestionOutput.textContent = `How about trying ${suggestions[selectedFood][randomIndex]}?`;
    } else {
        suggestionOutput.textContent = "Please select a food to get a suggestion.";
    }
}
