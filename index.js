// Explore Now
document.getElementById("exploreBtn").addEventListener("click", function () {
  alert("Redirecting you to explore more stock videos...");
  //  Scroll to banner section
  document
    .querySelector(".banner-section")
    .scrollIntoView({ behavior: "smooth" });
});

// Learn More
document.getElementById("learnMoreBtn").addEventListener("click", function () {
  alert("Here you can learn more about our creative content!");
  //Open a help or documentation page
  window.open("https://www.pexels.com/videos/", "_blank");
});

//  Get Started
document.getElementById("getStartedBtn").addEventListener("click", function () {
  alert("Let's get you started!");
  // Redirect to a signup form or new section
  window.location.href = "#";
});
