const transactionForm = document.getElementById("transactionForm");

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

  console.log(transaction);
});
