const landingPage = () => {
  const content = document.getElementById("content");

  const welcome = document.createElement("div");
  welcome.classList.add("welcome");
  welcome.innerHTML = "<h2>Welcome to our restaurant!</h2>";
  content.append(welcome);
};

export default landingPage;
