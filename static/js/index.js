$(document).ready(function() {
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  if (typeof bulmaCarousel !== "undefined") {
    bulmaCarousel.attach(".carousel", {
      slidesToScroll: 1,
      slidesToShow: 3,
      loop: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000
    });
  }

  // Pause autoplaying demo videos when they are far outside the viewport.
  const videos = document.querySelectorAll("video[autoplay]");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play().catch(() => {});
        } else {
          entry.target.pause();
        }
      });
    }, { rootMargin: "200px 0px" });
    videos.forEach((video) => observer.observe(video));
  }
});