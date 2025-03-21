function checkSpam(emailElement) {
    const isSpam = emailElement.getAttribute("data-spam") === "true";
    const resultDiv = document.getElementById("result");

    if (isSpam) {
        resultDiv.textContent = "Correct! This is a spam email.";
        resultDiv.className = "correct";
    } else {
        resultDiv.textContent = "Incorrect! This is not a spam email.";
        resultDiv.className = "incorrect";
    }
}
