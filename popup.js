/* =========================
   AD POPUP — ad.js
   Shows popup 1.5s after page load.
   Clicking the image → redirects to iisppracademy.com (handled by <a> in HTML).
   Only the × button dismisses the popup.
========================= */

(function () {
    const popupOverlay = document.getElementById("popupOverlay");
    const popupClose   = document.getElementById("popupClose");

    if (!popupOverlay || !popupClose) return; // safety guard

    // Show popup after a short delay so the page renders first
    window.addEventListener("load", function () {
        setTimeout(function () {
            popupOverlay.classList.add("active");
        }, 50);
    });

    // Close ONLY when the × button is clicked
    popupClose.addEventListener("click", function (e) {
        e.stopPropagation();
        popupOverlay.classList.remove("active");
    });
})();
