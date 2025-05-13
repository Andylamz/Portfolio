/** ------------------------- select ------------------------------- */
// buttons select
const prev_button = document.querySelectorAll(".project_button")[0];
const next_button = document.querySelectorAll(".project_button")[1];
const switch_button = document.querySelector(".switch_button");
// sections select
const sections = document.querySelectorAll("section");
// header + footer nav
const headerNav = document.querySelector(".nav-links");
const footerNav = document.querySelector(".footer-nav");
// menu button for mobile
const menuIcon = document.getElementById("menu-icon");

// scrolling related variables
let sectionIndex = 0;
let isScrolling = false;

// form element select
const contact_form = document.getElementById("contact-form");
const email_input = document.getElementById("email");
const message_input = document.getElementById("message");
const message_err = document.querySelector(".message-err");
const email_err = document.querySelector(".email-err");
const submit_button = document.querySelector(".btn-submit");

/*  ---------------------------- eventHandle ------------------------ */
// event handler for buttons
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

// dark mode
switch_button.addEventListener("click", function () {
  const all_Sections = document.querySelectorAll("section");
  // toggle section's backfround
  all_Sections.forEach((section) => {
    section.classList.toggle("dark");
  });

  // toggle icon
  this.classList.toggle("fa-moon");
  this.classList.toggle("fa-sun");
});

// handle scrolling
window.addEventListener("wheel", (e) => {
  // use to debouncing
  if (isScrolling) return;

  if (e.deltaY > 0 && sectionIndex < sections.length - 1) {
    sectionIndex++;
  } else if (e.deltaY < 0 && sectionIndex > 0) {
    sectionIndex--;
  }
  console.log(sectionIndex);

  isScrolling = true;
  sections[sectionIndex].scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    isScrolling = false;
  }, 500);
});

// optimising scrolling
// using event delegation to reduce event listener (performance optimisation)

// header nav
headerNav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    if (e.target.textContent === "About") {
      sectionIndex = 0;
    } else if (e.target.textContent === "Skills") {
      sectionIndex = 1;
    } else if (e.target.textContent === "Projects") {
      sectionIndex = 2;
    } else if (e.target.textContent === "Contact") {
      sectionIndex = 3;
    }
  }
});

// footer nav
footerNav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    if (e.target.textContent === "About") {
      sectionIndex = 0;
    } else if (e.target.textContent === "Skills") {
      sectionIndex = 1;
    } else if (e.target.textContent === "Projects") {
      sectionIndex = 2;
    } else if (e.target.textContent === "Contact") {
      sectionIndex = 3;
    }
  }
});

//menu toggle for mobile
menuIcon.addEventListener("click", () => {
  headerNav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!menuIcon.contains(e.target)) {
    headerNav.classList.remove("active");
  }
});

// handle form err
contact_form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email_input.value.trim() === "") {
    email_err.innerText = "Email field cannot be empty";
  }
  if (message_input.value.trim() === "") {
    message_err.innerText = "Message field cannot be empty";
  }

  if (
    !(email_input.value.trim() === "") &&
    !(message_input.value.trim() === "")
  ) {
    //   emptying errors and input fields
    contact_form.submit();
    message_err.innerText = email_err.innerText = "";
    message_input.value = email_input.value = "";
  }
});
