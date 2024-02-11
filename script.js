document.addEventListener("DOMContentLoaded", () => {
    const newCatBtn = document.getElementById("newCatBtn");
    const catImage = document.getElementById("catImage");
    const favoriteBtn = document.getElementById("favoriteBtn");
    let currentCat;

    // Event listener for the "Get Random Cat" button click
    newCatBtn.addEventListener("click", () => {
        fetchRandomCat();
    });

    // Event listener for the "Add to Favorites" button click
    favoriteBtn.addEventListener("click", () => {
        if (currentCat) {
            let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            favorites.push(currentCat);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            alert("Added to favorites!");
        }
    });

    // Function to fetch a random cat image
    function fetchRandomCat() {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(response => response.json())
            .then(data => {
                currentCat = data[0].url;
                catImage.src = currentCat;
            })
            .catch(error => console.error("Error fetching cat:", error));
    }

    // Fetch a random cat image when the page loads
    fetchRandomCat();
});
