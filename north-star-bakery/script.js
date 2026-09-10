const favoriteButtons = document.querySelectorAll(".favorite-btn");
const favoriteList = document.querySelector("#favorites-list");
const emptyFavoritesMessage = document.querySelector("#empty-favorites");

let favorites = JSON.parse(localStorage.getItem("bakeryFavorites")) || [];

function updateFavoritesDisplay(){
    favoriteList.innerHTML = "";

    if (favorites.length === 0) {
        emptyFavoritesMessage.style.display = "block";
    } else {
        emptyFavoritesMessage.style.display ="none";
        favorites.forEach(function (product) {
            const listItem = document.createElement("li");
            listItem.textContent= product;
            favoriteList.appendChild(listItem);
        });
    }
}

function toggleFavorite(productName, button) {
        if(favorites.includes(productName)) { 
            favorites = favorites.filter(function (product) {
                return product !== productName;
            });

            button.textContent = "Add to favorites";
        } else {
            favorites.push(productName);
            button.textContent = "Remove from Favorites";
        }
        localStorage.setItem("bakeryFavorites, JSON.stringify(favorites"));
        updateFavoritesDisplay();
    }

    favoriteButtons.forEach(function(button) {
        button.addEventListener("click", function () {
            const productName= button.dataset.product;
            toggleFavorite(productName, button);
        });
    });
updateFavoritesDisplay();