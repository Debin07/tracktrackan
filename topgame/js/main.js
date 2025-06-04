let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    showSlide(currentSlide);
  }

  // Optional: Auto play
  setInterval(() => {
    changeSlide(1);
  }, 5000); // setiap 5 detik

  item.addEventListener('click', () => {
    alert("Anda memilih: " + item.querySelector('p').textContent);
});
