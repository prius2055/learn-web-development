const instructors = [
  {
    image: "./img/speaker_01.png",
    name: "Jane Andersson",
    title: "Snr Software Engineer at twitter",
    background:
      "Jane is a senior software Engineer at twitter and a cofounder of medium. She has spent over 15 years in the software development space",
  },

  {
    image: "./img/speaker_02.png",
    name: "Yochai Bankler",
    title: "Project manager at Backer Hughes",
    background:
      "After working as a lecturer with the open university, Bankler join the Becker Hughes group where he works as a project manager. He has over 20 years experience in the industry",
  },

  {
    image: "./img/speaker_01.png",
    name: "Jane Andersson",
    title: "Snr Software Engineer at twitter",
    background:
      "Jane is a senior software Engineer at twitter and a cofounder of medium. She has spent over 15 years in the software development space",
  },

  {
    image: "./img/speaker_02.png",
    name: "Yochai Bankler",
    title: "Project manager at Backer Hughes",
    background:
      "After working as a lecturer with the open university, Bankler join the Becker Hughes group where he works as a project manager. He has over 20 years experience in the industry",
  },
];

const hamburger = document.querySelector(".hamburger");
const mobileNavCloseBtn = document.querySelector(".btn-close");
const mainContainer = document.getElementById("main-container");
const container = document.getElementById("container");
const mobileNav = document.querySelector(".mobile-nav");
const logo = document.querySelector(".logo");
const mobileNavLink = document.querySelectorAll(".nav-link");
const allInstructorProfile = document.querySelector(".profiles");
const moreButton = document.querySelector(".btn-more");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNavCloseBtn.classList.toggle("active");
  mobileNav.classList.toggle("active");
  mainContainer.classList.toggle("active");
  container.classList.toggle("active");
  logo.classList.toggle("active");
});

mobileNavCloseBtn.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNavCloseBtn.classList.toggle("active");
  mobileNav.classList.toggle("active");
  mainContainer.classList.toggle("active");
  container.classList.toggle("active");
  logo.classList.toggle("active");
});

mobileNavLink.forEach((nav) => {
  nav.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileNavCloseBtn.classList.toggle("active");
    mobileNav.classList.toggle("active");
    mainContainer.classList.toggle("active");
    container.classList.toggle("active");
    logo.classList.toggle("active");
  });
});

let instructorHtml;

instructors.forEach((instructor, i) => {
  const div = document.createElement("div");
  div.className = `${
    i === 0 || i === 1 || window.innerWidth > 765
      ? "instructor"
      : "instructor invisible"
  }`;
  div.innerHTML = `<img src="${instructor.image}" alt="${instructor.name}"/>
             <div class="intructor-profile">
                 <h2>${instructor.name}</h2>
                 <span>${instructor.title}</span>
                 <hr/>
               <p>${instructor.background}</p>
              </div>`;
  allInstructorProfile.appendChild(div);
});

console.log(window.innerWidth);

moreButton.addEventListener("click", () => {
  const profiles = document.querySelectorAll(".instructor");
  console.log(profiles);
  profiles.forEach((profile) => {
    profile.classList.remove("invisible");
  });
});
