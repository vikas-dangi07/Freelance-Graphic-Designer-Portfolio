
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop form from refreshing
    alert("✅ Message sent successfully!");
    this.reset(); // Clear the form fields
  });
