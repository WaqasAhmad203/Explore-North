document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault(); 


    var emailInput = document.getElementById("newsletterEmail");
    var email = emailInput.value.trim();


    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return;
    }
    alert("Form submitted successfully!");
    document.getElementById("newsletterForm").reset();
  });