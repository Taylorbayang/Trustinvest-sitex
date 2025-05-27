let returnMessage = "";

function calculateReturn() {
  const amount = document.getElementById("amount").value;
  const resultDiv = document.getElementById("result");

  if (!amount  isNaN(amount)  amount <= 0) {
    resultDiv.textContent = "Please enter a valid amount.";
    resultDiv.style.color = "red";
    return;
  }

  resultDiv.textContent = returnMessage || "Return will appear here.";
  resultDiv.style.color = "green";
}

function updateReturn() {
  const adminInput = document.getElementById("adminReturn").value;
  returnMessage = adminInput;
  alert("Return message updated.");
}
