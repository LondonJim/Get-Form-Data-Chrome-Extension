chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
	if (!!message.name) {
    console.log(message)
    restaurantText = `${message.name} ${message.address} ${message.postcode} ${message.latitude} ${message.longitude}`
    document.getElementById("restaurant-details").innerText = restaurantText
  }
})

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: tabs[0].url})
})
