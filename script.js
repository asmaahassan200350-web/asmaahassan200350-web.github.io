// ========== DARK MODE TOGGLE ==========
const btn = document.getElementById("darkModeBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // change icon
    if (document.body.classList.contains("dark")) {
        btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

// ========== SMOOTH NAV SCROLL ==========
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});