

const introScreen = document.getElementById("intro-screen");
const introVideo = document.getElementById("intro-video");
const skipIntro = document.getElementById("skip-intro");


document.body.classList.add("intro-active");



function closeIntro() {

  if (!introScreen) return;

  introScreen.classList.add("hide-intro");

  document.body.classList.remove("intro-active");


  setTimeout(() => {
    if (introVideo) {
      introVideo.pause();
    }
  }, 900);
}



if (skipIntro) {
  skipIntro.addEventListener("click", closeIntro);
}


if (introVideo) {

  introVideo.addEventListener("ended", closeIntro);

}


if (introVideo) {

  introVideo.addEventListener("error", () => {
    closeIntro();
  });

}



document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", event => {

    const target = document.querySelector(
      link.getAttribute("href")
    );

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});



const placeholderColors = [
  "#d8d5cf",
  "#cfd2ca",
  "#d9cfc7",
  "#c9ccc4",
  "#dcd5cc"
];


document.querySelectorAll("img").forEach((img, index) => {

  img.addEventListener("error", () => {

    img.style.background =
      placeholderColors[index % placeholderColors.length];

  });

});