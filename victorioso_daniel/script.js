let inputName = document.getElementById("comment_name");
let inputComment = document.getElementById("comment_box");
let commentBtn = document.getElementById("comment_btn");

let disabledStyles = {
  background: "linear-gradient(to right, rgb(177, 68, 68), #882929)",
    opacity: ".3",
  color: "white",
  border: "none",
  padding: "12px 25px",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
  marginTop: "10px",
  transition: "all 0.5s ease",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  cursor: "not-allowed",
};

let enabledStyles = {
  background:
    "linear-gradient(to right, var(--accent-color), var(--primary-color))",
  opacity: "1",
  color: "white",
  border: "none",
  padding: "12px 25px",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
  marginTop: "10px",
  transition: "all 0.5s ease",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

Object.assign(commentBtn.style, disabledStyles);

function checkRequirements() {
  if (inputName.value.trim() !== "" && inputComment.value.trim() !== "") {
    commentBtn.disabled = false;
    Object.assign(commentBtn.style, enabledStyles);
  } else {
    commentBtn.disabled = true;
    Object.assign(commentBtn.style, disabledStyles);
  }
}

inputName.addEventListener("input", checkRequirements);
inputComment.addEventListener("input", checkRequirements);
