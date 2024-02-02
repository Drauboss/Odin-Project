const img = document.querySelector("img");
const input = document.querySelector("input");

function getNewImage(searchTerm) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=632nhwNzkYC9MFQHEfLfnKzFL7ZSgmHw&s=${searchTerm}`,
    {
      mode: "cors",
    }
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.data.length === 0) {
        alert("No image found");
        return;
      }
      img.src = response.data.images.original.url;
    })
    .catch((error) => console.log("error, " + error));
}
