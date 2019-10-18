const button = document.querySelector("#likes");
const listOfLikes = document
button.addEventListener("click", () => {
    const url = `entries/entry4/like?=${button.value}`
    fetch(url)
        .then(response => response.json())
        .then(data => {

        })
})