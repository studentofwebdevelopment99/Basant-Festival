const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-menu");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
});

// here the code of frequently ask question
const questions = document.querySelectorAll(".faq_question");



questions.forEach((eachBtn) => {
  eachBtn.addEventListener("click", () => {
    let item = eachBtn.parentElement;

    document.querySelectorAll(".faq_item").forEach((eachItem) => {
      if (eachItem !== item) {
        eachItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

// questions.forEach((question) => {
//   question.addEventListener("click", () => {
//     const item = question.parentElement;

//     // close others (only one open)
//     document.querySelectorAll(".faq-item").forEach((i) => {

//       if (i !== item) {
//         i.classList.remove("active");
//       }
//     });

//     // toggle clicked
//     item.classList.toggle("active");
//   });
// });
