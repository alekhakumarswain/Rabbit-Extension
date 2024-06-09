// content.js

// Define your details
const userDetails = {
    name: "Alekha Kumar Swain",
    email: "alekhakumarswain111@gmail.com",
    address: "Astaranga,puri,Odisha",
    // Add more details as needed
  };
  
  // Function to fill form fields
  function fillForm() {
    const inputs = document.querySelectorAll("input[type='text'], input[type='email'], input[type='tel'], input[type='number'], input[type='password']");
    inputs.forEach(input => {
      switch (input.name.toLowerCase()) {
        case "name":
          input.value = userDetails.name;
          break;
        case "email":
          input.value = userDetails.email;
          break;
        case "address":
          input.value = userDetails.address;
          break;
        // Add more cases for other fields
        default:
          break;
      }
    });
  }
  
  // Fill form on page load
  fillForm();
  