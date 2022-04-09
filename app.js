console.log("script linked");
var epic = document.getElementById("epic");
gsap.registerPlugin(ScrollTrigger);
gsap.to(epic, {
  scrollTrigger: {
    trigger: epic,
    start: "top 5%",
    scrub: true,
  },
  y: -10,

  opacity: 0,
});

var nav = document.getElementsByClassName("navflexbox");

gsap.to(nav, {
  scrollTrigger: {
    trigger: ".contentbox2",
    start: "top 20% ",
    scrub: true,
  },
  y: -100,

  opacity: 0,
});

// gsap.from(epic, { duration: 1, y: " -100%", ease: "elastic" });
