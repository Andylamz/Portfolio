// buttons select
const prev_button = document.querySelectorAll(".project_button")[0];
const next_button = document.querySelectorAll(".project_button")[1];

// event handler
next_button.addEventListener("click", () => {
  const lists = document.querySelectorAll(".project");
  document.querySelector(".projects-container").appendChild(lists[0]);
});
prev_button.addEventListener("click", () => {
  const lists = document.querySelectorAll(".project");
  document
    .querySelector(".projects-container")
    .prepend(lists[lists.length - 1]);
});
