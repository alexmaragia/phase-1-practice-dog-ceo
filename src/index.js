// Initial log statement
console.log('%c HI', 'color: firebrick');

document.addEventListener("DOMContentLoaded", function() {
    // Challenge 1: Fetch and Display Dog Images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById("dog-image-container");
            data.message.forEach(imageUrl => {
                const img = document.createElement("img");
                img.src = imageUrl;
                imageContainer.appendChild(img);
            });
        })
        .catch(error => console.error("Error fetching dog images:", error));

    // Challenge 2: Fetch and Display Dog Breeds
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedList = document.getElementById("dog-breeds");
            for (const breed in data.message) {
                const li = document.createElement("li");
                li.textContent = breed;
                breedList.appendChild(li);

                // Challenge 3: Change Font Color on Click
                li.addEventListener("click", function() {
                    li.style.color = "blue";
                });
            }
        })
        .catch(error => console.error("Error fetching dog breeds:", error));

    // Challenge 4: Filter Breeds by Starting Letter
    const breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener("change", function(event) {
        const selectedLetter = event.target.value;
        const breedList = document.getElementById("dog-breeds");
        const breeds = breedList.getElementsByTagName("li");

        for (let i = 0; i < breeds.length; i++) {
            const breed = breeds[i].textContent;
            if (selectedLetter === "" || breed.startsWith(selectedLetter)) {
                breeds[i].style.display = "list-item";
            } else {
                breeds[i].style.display = "none";
            }
        }
    });
});
