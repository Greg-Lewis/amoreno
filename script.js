// forward slashes let you comment things
function suggestFood() {
    const foodList = document.getElementById('food-list');
    const suggestionOutput = document.getElementById('suggestion-output');

    const selectedFood = foodList.value;

    var suggestions = {
        pizza: ["Pepperoni Pizza", "Margherita Pizza", "Veggie Pizza", "BBQ Chicken Pizza"],
        burger: ["Cheeseburger", "Veggie Burger", "Bacon Burger", "Chicken Burger"],
        tacos: ["Beef Tacos", "Chicken Tacos", "Pork Tacos", "Veggie Tacos"]
    };


    if (selectedFood) {

        for ( var key in localStorage) { 
            var storage = suggestions[selectedFood].indexOf(key); 
            if (storage != -1) {
                suggestions[selectedFood].splice(storage, 1);

            }
        }

        const randomIndex = Math.floor(Math.random() * suggestions[selectedFood].length);
        const displayedFood = suggestions[selectedFood][randomIndex];
        suggestionOutput.textContent = "How about trying " + displayedFood + "?";
        var saveFoodEaten = document.createElement('button');
        saveFoodEaten.textContent = 'Food Eaten!';
        saveFoodEaten.onclick = function() {
            localStorage.setItem(displayedFood, "");
            suggestFood();

        };
        suggestionOutput.appendChild(saveFoodEaten);
    } else {
        suggestionOutput.textContent = "Please select a food to get a suggestion.";
    }
}
