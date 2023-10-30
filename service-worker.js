chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status == "complete") console.log("onUpdated:" + tab.url);
});

chrome.tabs.onActivated.addListener(() => {
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
      var currentURL = tabs[0].url;
      console.log("onActivated:" + currentURL); 
  })
});