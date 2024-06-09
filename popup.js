// popup.js

// Toggle autofill state
document.getElementById("toggleAutofill").addEventListener("click", () => {
    chrome.storage.sync.get("autofillEnabled", (data) => {
      const autofillEnabled = !data.autofillEnabled;
      chrome.storage.sync.set({ autofillEnabled });
      updateButtonText(autofillEnabled);
    });
  });
  
  // Update button text based on autofill state
  function updateButtonText(autofillEnabled) {
    const button = document.getElementById("toggleAutofill");
    button.textContent = autofillEnabled ? "Disable AutoFill" : "Enable AutoFill";
  }
  
  // Initialize button text
  chrome.storage.sync.get("autofillEnabled", (data) => {
    updateButtonText(data.autofillEnabled);
  });
  