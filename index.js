$(document).ready(() => {
  particlesJS.load("particles", "particles-config.json", () => {
    // console.log("particles.js loaded");
  });

  let options = {
    strings: [
      "I like to code",
      "I like to code",
      "I like to create",
      "I like to play",
      "I like to listen"
    ],
    typeSpeed: 50,
    startDelay: 500,
    backSpeed: 35,
    backDelay: 500,
    loop: true,
    loopCount: Infinity
  };

  let typed = new Typed(".subtitle", options);
});
