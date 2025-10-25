document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("header nav a");
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const section = document.querySelector(link.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
});
