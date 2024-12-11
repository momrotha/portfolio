// Smooth scrolling for internal anchor links
document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // Check if the link is an internal link (i.e., starts with '#')
    if (this.getAttribute("href").startsWith("#")) {
      // Prevent default behavior for internal links only
      e.preventDefault();

      // Smooth scroll to the target section
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
