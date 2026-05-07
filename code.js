console.log("code.js is connected");
const transactionForm = document.getElementById("transactionForm");

// initialize transactions as an array
let transactions = [];

// checks for saved transactions and pushes them into array
const savedTransactions = localStorage.getItem("transactions");

if (savedTransactions) {
  transactions = JSON.parse(savedTransactions);
}

// form handler
if (transactionForm) {
  transactionForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // capturing user inputs
    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;
    const type = document.getElementById("type").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    // form validation
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

    // saving the transaction as an object
    const transaction = {
      id: Date.now(),
      title: title,
      amount: amount,
      type: type,
      category: category,
      date: date,
    };

    // add transaction object inside the transactions array
    transactions.push(transaction);

    // save the array in localStorage
    localStorage.setItem("transactions", JSON.stringify(transactions));

    // resets form after saving transaction
    transactionForm.reset();

    // alerts user
    alert("Transaction added successfully");
  });
}

// grab table body element
const transactionsContainer = document.getElementById("transactionsContainer");

if (transactionsContainer) {
  transactions.forEach(function (transaction) {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${transaction.title}</td>
      <td>${transaction.amount}</td>
      <td>${transaction.type}</td>
      <td>${transaction.category}</td>
      <td>${transaction.date}</td>

      <td>
        <button class= "delete-btn" data-id= "${transaction.id}">
          Delete
        </button>
      </td>
    `;

    transactionsContainer.appendChild(row);
    //adding event listener on delete button
    const deleteButton = row.querySelector(".delete-btn");

    deleteButton.addEventListener("click", function () {
      const transactionId = Number(deleteButton.dataset.id);

      deleteTransaction(transactionId);
      location.reload;
    });
  });
}
//delete function
function deleteTransaction(id) {
  transactions = transactions.filter(function (transaction) {
    return transaction.id !== id;
  });

  localStorage.setItem("transactions", JSON.stringify(transactions));
}
