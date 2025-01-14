  // Toggle Background Color
  const toggleColorButton = document.getElementById("toggleColor");
  let isBlue = false;

  toggleColorButton.onclick = function () {
    document.body.style.backgroundColor = isBlue ? "white" : "lightblue";
    isBlue = !isBlue;
  };

  // Slider for Text Size
  const textSizeSlider = document.getElementById("textSizeSlider");

  textSizeSlider.oninput = function () {
    document.getElementById("text").style.fontSize = this.value + "px";
  };

  // Modal Functionality
  const openModalButton = document.getElementById("openModal");
  const modal = document.getElementById("modal");

  openModalButton.onclick = function () {
    modal.style.display = "block";
  };

  document.getElementById("closeModal").onclick = function () {
    modal.style.display = "none";
  };

  // Form Validation
  const form = document.getElementById("myForm");

  form.onsubmit = function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let errorMessage = "";

    if (name.length < 3) {
      errorMessage += "Name must be at least 3 characters long.<br>";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMessage += "Email must be valid.<br>";
    }

    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/\d/.test(password)
    ) {
      errorMessage +=
        "Password must be at least 8 characters long, contain one uppercase letter and one number.<br>";
    }

    document.getElementById("errorMessage").innerHTML = errorMessage;

    if (!errorMessage) {
      alert("Form submitted successfully!");
      form.reset();
      document.getElementById("errorMessage").innerHTML = "";
      modal.style.display = "none"; // Close modal on successful submission
    }
  };