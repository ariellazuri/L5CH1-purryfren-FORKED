var button = document.querySelector(".show-cat");
//console.log(button)
var cat = document.querySelector(".cat");
//console.log(cat)

button.addEventListener("click", function () {
  //button.innerText = "it's working"
  cat.classList.add("show");
});
