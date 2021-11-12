// alt der vedrører vores popup html

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("totalButton").addEventListener("click", calculateTotalHandler, false);

  function calculateTotalHandler() {
    // Få det fra content og ikke selve popup - chrome.tabs.query()
    chrome.tabs.query({currentWindow: true, active: true}, 
      function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'hi', getSpans);
      }
    ) 
  
    // get all spans with classname amount-col
    function getSpans(res) {

      //let prices = ["300 DKK", "400 DKK", "500 DKK"];
    
      let splitStringArr = [];
    
      for (let price of res.prices) {
        let tempPrice = price.split(" ");
        splitStringArr.push(tempPrice[0]);
      }
    
      let result = 0;
    
      for (let amount of splitStringArr) {
        result += +amount;
      }
    
      document.getElementById("totalAmount").innerHTML = result + " kr.";
    }
  }
}, false)

