let burger = document.querySelector(".burger");
let navbar = document.querySelector(".navbar");
let navlist = document.querySelector(".v-class");
let title = document.querySelector(".greet");
navbar.classList.remove("v-nav");

burger.addEventListener("click", () => {
  //    navlist.style.opacity=1;

  navlist.classList.toggle("v-class");
  navbar.classList.toggle("v-nav");
});

let i = 1,
  greet;
greet = "Welcome To My Page";

console.log(greet.length);

function typing() {
  let new_title = greet.slice(0, i);
  title.innerText = new_title;
  i > greet.length ? (i = 1) : i++;
  setTimeout(typing, 130);
}
typing();


////sliding cards
