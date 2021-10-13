document.getElementById("totalButton").addEventListener("click", function() {
  //let prices = document.getElementsByClassName('amount');
  let prices = ["300 DKK", "400 DKK", "500 DKK"];

  let splitStringArr = [];

  for (let price of prices) {

    let tempPrice = price.split(" ");
    splitStringArr.push(tempPrice[0]);

  }

  let result = 0;

  for (let amount of splitStringArr) {
    result += +amount;
  }

  document.getElementById("totalAmount").innerHTML = result + " kr.";
});