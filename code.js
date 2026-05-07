const transactionForm = document.getElementById("transactionForm");
let transactions = [];

transactionForm.addEventListener("submit", function (event) {
  event.preventDefault();

  //capturing user inputs
  const title = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;
  const type = document.getElementById("type").value;
  const category = document.getElementById("category").value;
  const date = document.getElementById("date").value;

  //form validation
  if (
    title === "" ||
    amount === "" ||
    type === "" ||
    category === "" ||
    date === ""
  ) {
    alert("Please fill in all fields");
    return;
  }
  //saving the transactions as objects
  const transaction = {
    title: title,
    amount: amount,
    type: type,
    category: category,
    date: date,
  };
  //add the transaction object inside the transactions array
  transactions.push(transaction);
  //save the array in Local storage
  localStorage.setItem("transactions", JSON.stringify(transactions));
  //resets form after saving transaction
  transactionForm.reset();
//alerts user
  alert("Transaction added successfully");
});
