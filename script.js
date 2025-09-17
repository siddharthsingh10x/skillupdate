// Function to Load Components
function loadComponent(containerId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Load Navbar, Footer, and WhatsApp
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("navbar-container", "navbar.html");
    loadComponent("footer-container", "footer.html");
    loadComponent("whatsapp-container", "whatsapp.html");
}); 

 
// Navbar Section
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
});


// Testimonials Arrows
let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.testimonial-slide');
    if (index >= slides.length) { slideIndex = 0; }
    if (index < 0) { slideIndex = slides.length - 1; }
   
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Auto slide every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);


// FAQs Section
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const faqItem = button.parentElement;
       
        // Close all other FAQs before opening the clicked one
        document.querySelectorAll(".faq-item").forEach(item => {
            if (item !== faqItem) {
                item.classList.remove("active");
                item.querySelector(".faq-answer").style.display = "none";
            }
        });

        const answer = faqItem.querySelector(".faq-answer");
        if (faqItem.classList.contains("active")) {
            faqItem.classList.remove("active");
            answer.style.display = "none";
        } else {
            faqItem.classList.add("active");
            answer.style.display = "block";
        }
    });
});


// Navbar for mobile
function toggleMenu() {
    let mobileMenu = document.getElementById("mobileMenu");
    let hamburger = document.getElementById("hamburger");

    mobileMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
}

function toggleDropdown(id) {
    let dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    dropdown.previousElementSibling.classList.toggle("active");
}


// contact submit query button after msg and reset form 
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
    
        const formData = new FormData(form);
    
        fetch("https://script.google.com/macros/s/AKfycbz6-sYT9hQKJywlc8UzEjIwFmMmtEOilxUuksrMNgJmoD7zkTJ_DhUFmtcb6FIg8JJt/exec", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            successMessage.style.display = "block";
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 3000);
            form.reset();
        })
        .catch(error => {
            console.error("Error!", error.message);
        });
    });
});


////For Good navigation
window.onload = function() {
    const hash = window.location.hash;
    if (hash) {
        setTimeout(() => {
            document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 100); // 100ms delay to smooth 
    }
};

//google appscript code
// function doPost(e) {
//     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
   
//     var name = e.parameter.name;
//     var email = e.parameter.email;
//     var phone = e.parameter.phone;
//     var course = e.parameter.course;
//     var message = e.parameter.message;
   
//     sheet.appendRow([name, email, phone, course, message]);
  
//     return ContentService
//       .createTextOutput("Success")
//       .setMimeType(ContentService.MimeType.TEXT);
//   }


// PAY AFTER PLACEMENT POPUP SCRIPT
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("pap-popup");
  const closeBtn = popup.querySelector(".pap-close");

  function showPopup() {
    setTimeout(() => popup.classList.add("show"), 3000); // 3 seconds delay
  }

  showPopup(); // Show on initial load

  // If you want to ensure it triggers every time homepage is visited:
  window.addEventListener("pageshow", function (event) {
    if (event.persisted || performance.navigation.type === 2) {
      popup.classList.remove("show"); // Reset if user returns via back/forward
      showPopup();
    }
  });

  closeBtn.onclick = () => popup.classList.remove("show");

  // Close when clicking outside the popup content
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.classList.remove("show");
    }
  });
});




// slider
  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    const loopOrder = [0, 1, 2, 3, 4, 0]; // 1→2→3→4→6→1 (index-based)
    let index = 0;

    function showSlide(i) {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[loopOrder[i]].classList.add("active");
    }

    function nextSlide() {
      index = (index + 1) % loopOrder.length;
      showSlide(index);
    }

    function prevSlide() {
      index = (index - 1 + loopOrder.length) % loopOrder.length;
      showSlide(index);
    }

    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);

    // Auto Slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Show first slide initially
    showSlide(index);
  });



// tourch navigation
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Touch support
  let touchStartX = 0;
  let touchEndX = 0;

  const sliderWrapper = document.querySelector('.slider-wrapper');

  sliderWrapper.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  });

  sliderWrapper.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      nextSlide(); // swipe left
    }
    if (touchEndX > touchStartX + 50) {
      prevSlide(); // swipe right
    }
  }









