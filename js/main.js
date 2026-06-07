// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when clicking a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Scroll Reveal Animation
const scrollReveal = () => {
  const reveals = document.querySelectorAll(".scroll-reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

// Skill Bar Animation
const animateSkillBars = () => {
  const skillBars = document.querySelectorAll(".skill-bar");

  skillBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 50) {
      const width = bar.getAttribute("data-width");
      bar.style.width = width;
    }
  });
};

window.addEventListener("scroll", animateSkillBars);
window.addEventListener("load", animateSkillBars);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.remove("hidden");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Navbar Background on Scroll
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(255, 107, 107, 0.95)";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.backgroundColor = "#ff6b6b";
    navbar.style.backdropFilter = "none";
  }
});

// Parallax Effect for Decorative Elements
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const decorations = document.querySelectorAll(
    ".animate-bounce, .animate-pulse",
  );

  decorations.forEach((decoration, index) => {
    const speed = 0.5 + index * 0.1;
    decoration.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Typewriter Effect for Hero (Optional enhancement)
const typeWriter = (element, text, speed = 100) => {
  let i = 0;
  element.textContent = "";

  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };

  type();
};

// Interactive Card Tilt Effect
document.querySelectorAll(".neo-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
  });
});

// Random Rotation for Tags on Load
document.querySelectorAll(".neo-tag").forEach((tag) => {
  const randomRotation = (Math.random() - 0.5) * 6;
  tag.style.transform = `rotate(${randomRotation}deg)`;
});

// Confetti Effect on Click (Fun interaction)
const createConfetti = (x, y) => {
  const colors = [
    "#ff6b6b",
    "#4ecdc4",
    "#ffe66d",
    "#aa96da",
    "#f38181",
    "#95e1d3",
  ];
  const confettiCount = 30;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.left = x + "px";
    confetti.style.top = y + "px";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.border = "2px solid black";
    confetti.style.pointerEvents = "none";
    confetti.style.zIndex = "9999";

    const angle = (Math.PI * 2 * i) / confettiCount;
    const velocity = 5 + Math.random() * 10;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;

    document.body.appendChild(confetti);

    let posX = x;
    let posY = y;
    let opacity = 1;

    const animate = () => {
      posX += vx;
      posY += vy + 2;
      opacity -= 0.02;

      confetti.style.left = posX + "px";
      confetti.style.top = posY + "px";
      confetti.style.opacity = opacity;
      confetti.style.transform = `rotate(${posX * 2}deg)`;

      if (opacity > 0) {
        requestAnimationFrame(animate);
      } else {
        confetti.remove();
      }
    };

    requestAnimationFrame(animate);
  }
};

// Add confetti on button clicks
document.querySelectorAll(".neo-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (!btn.getAttribute("href") || btn.getAttribute("href") === "#") {
      createConfetti(e.clientX, e.clientY);
    }
  });
});

// Keyboard Navigation Enhancement
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    mobileMenu.classList.add("hidden");
  }
});

// Performance: Pause animations when tab is not visible
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.body.style.animationPlayState = "paused";
  } else {
    document.body.style.animationPlayState = "running";
  }
});

// Console Easter Egg
console.log(
  "%c🎨 Neo-Brutalism Portfolio",
  "font-size: 24px; font-weight: bold; color: #ff6b6b;",
);
console.log(
  "%cBuilt with passion and bold colors!",
  "font-size: 14px; color: #4ecdc4;",
);
