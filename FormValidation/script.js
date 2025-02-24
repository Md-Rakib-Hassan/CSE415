const form = document.getElementById("regForm");
const inputs = form.querySelectorAll("input");

const validation = (input) => {
  let isValid = true;

  if (input.type === "email") {
    isValid = /\S+@\S+\.\S+/.test(input.value);
  } else if (input.type === "text") {
    isValid = isNaN(input.value);
  } else if (input.type === "password") {
    isValid = input.value.length >= 6;
  } else if (input.type === "tel") {
    isValid = /^\d{11}$/.test(input.value);
  } else {
    isValid = input.value.trim() !== "";
  }

  if (isValid) {
    input.style.borderBottom = "4px solid green";
  } else {
    input.style.borderBottom = "4px solid red";
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", function () {
    validation(input);
  });
});
