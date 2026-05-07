const transactionForm = document.getElementById("transactionForm");
//initialize transactions as an array
let transactions = [];

//checks for saved transactions and pushes them into array
const savedTransactions = localStorage.getItem("transactions");

if (savedTransactions) {
  transactions = JSON.parse(savedTransactions);
}
//form handler
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
