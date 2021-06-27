var category = document.getElementById("categories-nav");
var create = document.getElementById("create-nav");

var categoryHover = document.querySelector(".category-hover-list");
var createHover = document.querySelector(".create-hover-list");

//Category Hovers handling
category.onmouseover = function () {
  categoryHover.style.display = "grid";
};

categoryHover.onmouseover = function () {
  categoryHover.style.display = "grid";
};

category.onmouseleave = function () {
  categoryHover.style.display = "none";
};

categoryHover.onmouseleave = function () {
  categoryHover.style.display = "none";
};

// Create Hovers Handling
create.onmouseover = function () {
  createHover.style.display = "initial";
};

createHover.onmouseover = function () {
  createHover.style.display = "grid";
};

create.onmouseleave = function () {
  createHover.style.display = "none";
};

createHover.onmouseleave = function () {
  createHover.style.display = "none";
};
