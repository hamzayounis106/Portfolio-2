// src/animation.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();
gsap.from(".menu_fadeDown", {
  duration: 1,
  y: -100,
  opacity: 0,
  duration: 1.4,
  stagger: 0.1,
});
tl.from(".content_hero , .hero_img ", {
  duration: 1,
  delay: 0.5,
  y: 100,
  opacity: 0,
  duration: 1.4,
  stagger: 0.2,
});
// tl.from(".hero_img", {
//   duration: 1,
//   opacity: 0,
//   y: 100,
//   delay: 0,
// });
tl.to(".hero_img", {
  duration: 1,

  delay: 0,
  y: 20,
  ease: "Power1.easeInOut",
  yoyo: true,
  repeat: -1,
});

gsap.from(".aboutFadeUp", {
  duration: 1,
  y: 200,
  duration: 1.8,
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    end: "top 60%",
    // markers: true,
    scrub: 5,
  },
});
gsap.from(".skills_section_header , .skill_headlineGSAP , .Skillswiper", {
  duration: 1,
  y: 200,
  duration: 1.8,
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%",
    end: "top 60%",
    // markers: true,
    scrub: 5,
  },
});
gsap.from(".experience_section_header , .exp_headlineGSAP  ", {
  duration: 1,
  y: 200,
  duration: 1.8,
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#Experience",
    start: "top 80%",
    end: "top 60%",
    // markers: true,
    scrub: 5,
  },
});
document.querySelectorAll(".expereience_boxes").forEach((box) => {
  gsap.from(box, {
    duration: 1,
    y: 200,
    duration: 1.8,
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
      trigger: box,
      start: "top 80%",
      end: "top 70%",
    //   markers: true,
      scrub: 5,
    },
  });
});
gsap.from(".work_header_heading , .work_header_headline  ", {
  duration: 1,
  y: 200,
  duration: 1.8,
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#work",
    start: "top 80%",
    end: "top 60%",
    // markers: true,
    scrub: 5,
  },
});
document.querySelectorAll(".work_single_box").forEach((box) => {
  gsap.from(box, {
    y: 200,
    duration: 1.8,
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
      trigger: box,
      start: "top 80%",
      end: "top 70%",
    //   markers: true,
      scrub: 5,
    },
  });
});
gsap.from(".tetimonial_header , .tetimonial_headline , .sliderTestimonial ", {
  duration: 1,
  y: 200,
  delay: 0.5,
  duration: 1.8,
  opacity: 0,
  stagger: 0.8,
  scrollTrigger: {
    trigger: "#Testimonials",
    start: "top 85%",
    end: "top 60%",
    // markers: true,
    scrub: 5,
  },
});
gsap.from(".fadeUpFooter ", {
  duration: 1.5,
  y: 200,
  delay: 0.8,
  duration: 1.8,
  opacity: 0,
  stagger: 0.7,
  scrollTrigger: {
    trigger: "#Contact",
    start: "top 85%",
    end: "top 60%",
    // markers: true,
    scrub: 5,
  },
});
