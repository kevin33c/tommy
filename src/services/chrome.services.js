/*global chrome*/

export class ChromeServices {

  onClick() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log(tabs[0].id);
      chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, async function (response) {
        console.log(await response.farewell);
      });
    });
  }

}