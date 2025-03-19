let nameInput = document.getElementById("name");
let commentTextarea = document.getElementById("comment");
let submitButton = document.getElementById("submitBtn");
let form = document.getElementById("commentForm");

function validateForm() {
  submitButton.disabled = !(
    nameInput.value.trim() && commentTextarea.value.trim()
  );
}

form.addEventListener("input", validateForm);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!submitButton.disabled) {
    alert("Form submitted successfully!");
    form.reset();
    validateForm();
  }
});
