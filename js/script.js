let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let themeToggler = document.querySelector(".theme-toggler");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = () => {
  themeToggler.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  themeToggler.classList.remove("active");
};

document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--main-color", color);
  };
});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const words = [
  "event organizers",
  "party planners",
  "wedding experts",
  "festival managers",
  "corporate hosts",
];
let index = 0;
const span = document.getElementById("changing-text");

function animateWord(word) {
  span.innerHTML = ""; // صاف کر دیا
  for (let i = 0; i < word.length; i++) {
    const letter = document.createElement("span");
    letter.textContent = word[i];
    letter.className = "letter";
    letter.style.animationDelay = i * 0.1 + "s";
    span.appendChild(letter);
  }
}

const imageList = [
  "images/g-1.jpg",
  "images/g-2.jpg",
  "images/g-3.jpg",
  "images/g-4.jpg",
  "images/g-5.jpg",
  "images/g-6.jpg",
  "images/g-7.jpg",
  "images/g-8.jpg",
  "images/g-9.jpg",
];

let currentIndex = 0;

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");

function showImageFromIndex(index) {
  currentIndex = index;
  modalImg.src = imageList[currentIndex];
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function showImage(el) {
  const imgSrc = el.closest(".box").querySelector("img").src;
  currentIndex = imageList.findIndex((img) => imgSrc.includes(img));
  showImageFromIndex(currentIndex);
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = ""; // Restore scroll
}

function changeImage(step) {
  currentIndex = (currentIndex + step + imageList.length) % imageList.length;
  modalImg.src = imageList[currentIndex];
}

// ✅ Close when clicking outside image
modal.addEventListener("click", function (e) {
  if (e.target === modal || e.target.classList.contains("close-btn")) {
    closeModal();
  }
});

// ✅ Escape key for close
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

let countersStarted = false;

function startCounters() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    counter.innerText = "0";
    const update = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(update, 20);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !countersStarted) {
        startCounters();
        countersStarted = true;
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(document.getElementById("counterSection"));
