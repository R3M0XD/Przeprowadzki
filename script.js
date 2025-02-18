// Inicjalizacja AOS (efekt fade-in)
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
      duration: 800, // czas trwania animacji w ms
      once: true,    // animacja tylko raz
    });
  
    // Inicjalizacja karuzeli opinii
    initCarousel();
  
    // Opcjonalnie możesz dodać animacje GSAP tutaj
    // np. gsap.from(".service-box", { opacity: 0, y: 50, duration: 1 });
  });
  
  // Funkcja do płynnego scrollu do sekcji
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  // Walidacja formularza kontaktowego i wysłanie danych (na e-mail)
  function submitForm(e) {
    e.preventDefault(); // blokujemy wysłanie by przejąć kontrolę
  
    const form = document.getElementById("contactForm");
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
  
    // Prosta walidacja
    if (!name || !phone || !email || !message) {
      alert("Proszę uzupełnić wszystkie pola formularza.");
      return false;
    }
  
    // Tutaj możesz podpiąć wysyłanie danych przez np. emailjs, AJAX itp.
    // Placeholder: wyświetlamy komunikat sukcesu
    alert("Dziękujemy za wysłanie zapytania. Skontaktujemy się wkrótce!");
  
    // Wyczyść formularz
    form.reset();
  
    return false;
  }
  
  /* Karuzela opinii - prosta implementacja */
  let currentSlide = 0;
  
  function initCarousel() {
    const slides = document.querySelectorAll(".testimonial-slide");
    const prevBtn = document.getElementById("prevSlide");
    const nextBtn = document.getElementById("nextSlide");
  
    showSlide(currentSlide, slides);
  
    prevBtn.addEventListener("click", () => {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      showSlide(currentSlide, slides);
    });
  
    nextBtn.addEventListener("click", () => {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      showSlide(currentSlide, slides);
    });
  }
  
  function showSlide(index, slides) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${(i - index) * 100}%)`;
      slide.style.transition = "transform 0.5s ease-in-out";
    });
  }
