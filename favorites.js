document.addEventListener("DOMContentLoaded", () => {
    const favoritesContainer = document.getElementById("favoritesContainer");
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = "<p>No favorite cat images yet!</p>";
    } else {
        favorites.forEach(favorite => {
            const catImageContainer = document.createElement("div");
            catImageContainer.classList.add("favorite-cat");

            const img = document.createElement("img");
            img.src = favorite;
            img.alt = "Favorite Cat";
            catImageContainer.appendChild(img);

            favoritesContainer.appendChild(catImageContainer);
        });
    }
});
