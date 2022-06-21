// Vertically center code
usedHeight = document
  .querySelector("body > main")
  .getBoundingClientRect().height;
totalHeight = window.innerHeight;
if (totalHeight > usedHeight) {
  availHeight = (totalHeight - usedHeight) / 2;
  $("body > main").css({
    paddingTop: availHeight + "px",
    paddingBottom: availHeight + "px",
  });
}

//Clear session storage
sessionStorage.clear();

//Share data that will shared on click of share button
shareData = {
  title: "Ludon",
  text: "Play ludo online without downloading any app on your phone!",
  url: "https://ludon.ml",
};

$("#share-area > button").click(function () {
  navigator.share(shareData);
});

//Code for Game mode click

$("#pass-and-play").on("click", function () {
  location.href = "pass-and-play.html";
});

$("#computer").on("click", function () {
  location.href = "computer.html";
});

$("#play-online").on("click", function () {
  alert("Coming Soon!");
});

$("#play-online-with-friends").on("click", function () {
  alert("Coming Soon!");
});
