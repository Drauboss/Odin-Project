const contact = () => {
  const content = document.getElementById("content");
  const contactDiv = document.createElement("div");

  contactDiv.classList.add("about-us");
  contactDiv.innerHTML = "<h2>About Us</h2>";

  content.append(contactDiv);
};

export default contact;
