const faqItems = document.querySelectorAll(".faq-item");
const hiddenElements = document.querySelectorAll(".hidden");
const counters = document.querySelectorAll(".counter");
const navLinks = document.querySelectorAll(".nav-links a");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const icon = item.querySelector(".icon");

  question.addEventListener("click", () => {
    faqItems.forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active");
        faq.querySelector(".icon").textContent = "+";
      }
    });
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      icon.textContent = "-";
    } else {
      icon.textContent = "+";
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
});

hiddenElements.forEach((element) => {
  observer.observe(element);
});

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = Number(entry.target.dataset.target);
      let current = 0;
      const increment = target / 100;

      const interval = setInterval(() => {
        current += increment;

        entry.target.textContent = Math.floor(current);

        if (current >= target) {
          entry.target.textContent = target;
          clearInterval(interval);
          counterObserver.unobserve(entry.target);
        }
      }, 20);
    }
  });
});

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = link.getAttribute("href");
    const section = document.querySelector(id);

    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});
