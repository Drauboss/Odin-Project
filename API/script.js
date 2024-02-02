const img = document.querySelector("img");
const input = document.querySelector("input");

async function getNewImage(searchTerm) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=API_KEY&s=${searchTerm}`,
    {
      mode: "cors",
    }
  );
  response
    .json()
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
