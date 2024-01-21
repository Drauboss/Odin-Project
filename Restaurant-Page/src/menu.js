const menu = () => {
  const content = document.getElementById("content");

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");
  menuDiv.innerHTML = "<h2>Menu</h2>";

  content.append(menuDiv);
};

export default menu;
