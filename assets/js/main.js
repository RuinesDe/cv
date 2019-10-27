// Main JS

(function(){
  var wipLink = document.getElementById("wipLink");
  var wipIllustrations = document.getElementById("wipIllustrations");

  var wipIllustrationsOpen = false;
  var picture = "";
  var previousPicture = "";
  // var previousIndex = 0;

  wipLink.addEventListener("click", function(e) {
    e.preventDefault();

    // var randomIndex = Math.floor(Math.random() * 5) + 1;

    if (wipIllustrationsOpen === false) {
      wipIllustrationsOpen = true;
      wipIllustrations.classList.add("visible");
    } else {
      wipIllustrationsOpen = false;
      wipIllustrations.classList.remove("visible");
    }
  }, false);

})();