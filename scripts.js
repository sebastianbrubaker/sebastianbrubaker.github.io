// Open the contact popup
document.getElementById("contact-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("contact-popup").style.display = "flex";
});

// Close the contact popup
function closePopup() {
    document.getElementById("contact-popup").style.display = "none";
}
