//DOM

let links = document.querySelectorAll(".close");

links.forEach(function (link) {
  link.addEventListener("click", function (ev) {
    let content = document.querySelector(".content");
    content.classList.remove("fadeInDown");
    location.href = "./boletines";
  });
});



