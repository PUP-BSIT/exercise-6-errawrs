document.addEventListener("DOMContentLoaded", function () {
  let commentNameInput = document.getElementById("comment-name");
  let goalCommentInput = document.getElementById("goal-comment");
  let commentBtn = document.getElementById("comment-btn");

  function validateCommentForm() {
    if (
      commentNameInput.value.trim() !== "" &&
      goalCommentInput.value.trim() !== ""
    ) {
      commentBtn.disabled = false;
    } else {
      commentBtn.disabled = true;
    }
  }

  commentNameInput.addEventListener("input", validateCommentForm);
  goalCommentInput.addEventListener("input", validateCommentForm);

  let goalCommentForm = document.querySelector(".goal-comment-form");
  goalCommentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    commentNameInput.value = "";
    goalCommentInput.value = "";
    commentBtn.disabled = true;
  });
});
