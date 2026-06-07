/* =========================
   AD POPUP — popup.js
   Shows popup 0.8s after page load.
   Only the × button dismisses the popup and minimizes it.
   Clicking 'View Announcement' in the minimized banner re-opens the popup.
========================= */

(function () {
    const popupOverlay = document.getElementById("popupOverlay");
    const popupClose   = document.getElementById("popupClose");
    const minimizedAdSection = document.getElementById("minimizedAdSection");
    const reopenAdBtn = document.getElementById("reopenAdBtn");

    if (!popupOverlay || !popupClose) return; // safety guard

    // Show popup after a short delay so the page renders first
    window.addEventListener("load", function () {
        setTimeout(function () {
            popupOverlay.classList.add("active");
        }, 50);
    });

    // Close and minimize
    popupClose.addEventListener("click", function (e) {
        e.stopPropagation();
        popupOverlay.classList.remove("active");
        if (minimizedAdSection) {
            minimizedAdSection.classList.add("active");
        }
    });

    // Reopen from minimized state
    if (reopenAdBtn) {
        reopenAdBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            popupOverlay.classList.add("active");
        });
    }
})();
