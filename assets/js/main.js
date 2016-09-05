// Main JS

(function(){
  var wipLink = document.getElementById("wipLink");
  var wipIllustrations = document.getElementById("wipIllustrations");

  var firstClick = false;
  var picture = "";
  var previousPicture = "";
  var previousIndex = 0;

  wipLink.addEventListener("click", function(e) {
    e.preventDefault();

    var randomIndex = Math.floor(Math.random() * 5) + 1;

    if (firstClick === false) {
      firstClick = true;
      wipIllustrations.classList.add("visible");
    } else {
      previousPicture.classList.remove("visible");
    }

    if (randomIndex !== previousIndex ) {
      picture = document.getElementById("picture"+randomIndex);
    } else {
      if (randomIndex === 5) {
        randomIndex = 4;
      } else if (randomIndex === 1) {
        randomIndex = 2;
      } else {
        randomIndex = randomIndex - 1;
      }

      picture = document.getElementById("picture"+randomIndex);
    }

    previousIndex = randomIndex;
    previousPicture = picture;
    picture.classList.add("visible");
  }, false);

})();