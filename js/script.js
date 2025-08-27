document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  // gsap code here!
  let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1,
    effects: true,
    normalizeScroll: true,
    smoothTouch: 0.1,
  });

  document.getElementById("btnCollab").addEventListener("click", () => smoother.scrollTo("#message", true, "top top"));

  // Apply lag/parallax to inner elements, not whole sections
  smoother.effects(".parallax-item", {
    speed: 1.2,
    lag: (i) => i * 0.3,
  });
});

function openInNewTab(url) {
  window.open(url, "_blank");
}

document.getElementById("downloadResume").addEventListener("click", function () {
  openInNewTab("https://drive.google.com/file/d/1-xOoT-s-yptIIBDdtjaVIaL73bCYQ_no/view?usp=sharing");
});

window.backtoTop = () =>
  (document.scrollingElement || document.documentElement).scrollTo({
    top: 0,
    behavior: "smooth",
  });

// EmailJS

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "IGdCd_1QKEOyeP9U2",
  });
})();

window.onload = function () {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm("service_6lbbsyu", "contact_form", this).then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  });
};
