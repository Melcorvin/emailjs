// Initialize EmailJS with your public API key
(function () {
  emailjs.init("1RLBBcYFI2u_YhPDw");
  // Replace with your actual API public key
})();

// Add event listener to form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Prevent the default form submission

    // Use EmailJS to send the form data
    emailjs
      .sendForm("service_mw4if98", "template_tj9vkkd", this)
      // Replace with your actual service and template IDs
      .then(
        function () {
          alert("Message Sent Successfully!");
        },
        function (error) {
          alert("Failed to send the message: " + JSON.stringify(error));
        }
      );
  });
