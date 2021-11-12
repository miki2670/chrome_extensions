// this content js has access to things on page

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    const spansFromContent = document.getElementsByClassName("amount-col");
    htmlCollectionToArray = Array.from(spansFromContent);

    const prices = [];

    for (let i = 0; i < htmlCollectionToArray.length; i++) {
      if (htmlCollectionToArray[i].innerHTML.indexOf("DKK") !== -1) {
        prices.push(htmlCollectionToArray[i].innerHTML);
      }
    }

    sendResponse({prices: prices});
}) 