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
});
document.addEventListener("DOMContentLoaded", () => {
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip-box";
    document.body.appendChild(tooltip);

    document.querySelectorAll(".has-tooltip").forEach(el => {
        el.addEventListener("mouseenter", () => {
            tooltip.textContent = el.dataset.tooltip;
            const rect = el.getBoundingClientRect();
            tooltip.style.left = rect.left + window.scrollX + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
            tooltip.style.top = rect.bottom + window.scrollY  + "px";
            tooltip.style.opacity = "1";
            tooltip.style.transform = "translateY(0)";
        });

        el.addEventListener("mouseleave", () => {
            tooltip.style.opacity = "0";
            tooltip.style.transform = "translateY(5px)";
        });
    });
});
