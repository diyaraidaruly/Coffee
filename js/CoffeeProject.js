function showPage(pageId) {
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    const page = document.getElementById(pageId);
    if (page) page.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    const aboutPage = document.getElementById('about');
    if (aboutPage) {
        showPage('about');
    }

    const tooltip = document.createElement("div");
    tooltip.className = "tooltip-box";
    tooltip.style.position = "absolute";
    tooltip.style.background = "#333";
    tooltip.style.color = "#fff";
    tooltip.style.padding = "6px 10px";
    tooltip.style.borderRadius = "6px";
    tooltip.style.fontSize = "13px";
    tooltip.style.pointerEvents = "none";
    tooltip.style.transition = "opacity 0.2s ease, transform 0.2s ease";
    tooltip.style.opacity = "0";
    tooltip.style.zIndex = "1000";
    document.body.appendChild(tooltip);

    document.querySelectorAll(".has-tooltip").forEach(el => {
        el.addEventListener("mouseenter", () => {
            tooltip.textContent = el.dataset.tooltip;
            const rect = el.getBoundingClientRect();
            tooltip.style.left = rect.left + window.scrollX + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
            tooltip.style.top = rect.bottom + window.scrollY + "px";
            tooltip.style.opacity = "1";
            tooltip.style.transform = "translateY(0)";
        });

        el.addEventListener("mouseleave", () => {
            tooltip.style.opacity = "0";
            tooltip.style.transform = "translateY(5px)";
        });
    });

    const form = document.getElementById("registerForm");
    const message = document.getElementById("successMessage");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const confirmPassword = document.getElementById("confirmPassword").value.trim();

            if (!email.includes("@")) {
                alert("Email must contain '@' symbol!");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match! Please try again.");
                return;
            }

            message.style.display = "block";
            message.style.color = "green";
            message.textContent = "Registration form submitted successfully!";
            form.reset();
        });
    }
});
