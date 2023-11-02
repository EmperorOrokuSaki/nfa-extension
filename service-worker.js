chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.notifications.create('notificationID', {
    type: 'basic',
    iconUrl: './images/icon-16.png',
    title: 'New URL detected',
    message: 'URL was changed to: ' + tab.url,
    priority: 2,
    buttons: [{
      title: "Open the safe version",
      // iconUrl: "./images/icon-16.png"
    }]
  });

  if (changeInfo.status == "complete") console.log("onUpdated:" + tab.url);
});

chrome.notifications.onButtonClicked.addListener(function (notifId, btnIdx) {

  chrome.tabs.create({
    url: 'https://ipfs.io/ipfs/bafybeiga3woa76vm6q3siktgpgxyxj2qe53tqtknjpahtpcwncanrujhkq',
    selected: true,
  })

  // if (notifId === myNotificationID) {
  //   if (btnIdx === 0) {
  //     window.open("...");
  //   } else if (btnIdx === 1) {
  //     saySorry();
  //   }
  // }
});

// We may not need the `onActivated` listener as any URL change will trigger the `onUpdated` listener.
chrome.tabs.onActivated.addListener(() => {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var currentURL = tabs[0].url;
    console.log("onActivated:" + currentURL);
  })
});