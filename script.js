// ===========================
// MOBILE MENU
// ===========================

const menu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ===========================
// STICKY NAVBAR
// ===========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (navbar) {

        if (window.scrollY > 50) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }

    }

});

// ===========================
// ACTIVE MENU
// ===========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===========================
// SCROLL ANIMATION
// ===========================

const hiddenElements = document.querySelectorAll(
    ".about, .services, .portfolio, .why, .testimonial, .contact"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

hiddenElements.forEach(el => {

    el.classList.add("hidden");
    revealObserver.observe(el);

});

// ===========================
// CONTACT FORM
// ===========================

document.getElementById("whatsappForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let phone = document.getElementById("phone").value;

    let service = document.getElementById("service").value;

    let message = document.getElementById("message").value;

    let text = `Hello DNB Visuals!

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Project:
${message}`;

    window.open(`https://wa.me/919079847620?text=${encodeURIComponent(text)}`);

});

// ===========================
// BUTTON HOVER
// ===========================

const buttons = document.querySelectorAll(
    "button,.btn,.primary-btn,.secondary-btn"
);

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-4px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0)";

    });

});

// ===========================
// COUNTER ANIMATION
// ===========================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.dataset.target;

            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 80));

            function update() {

                current += increment;

                if (current < target) {

                    counter.innerText = current;

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            }

            update();

            counterObserver.unobserve(counter);

        }

    });

}, { threshold: 0.5 });

counters.forEach(counter => {

    counterObserver.observe(counter);

});