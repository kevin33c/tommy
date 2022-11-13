/*global chrome*/
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    /*
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    */
    if (request.action === "GET-PROFILE")
      //alert("Alert Message")
      var a = document.getElementsByTagName("h1")[0].innerHTML
      console.log(a);
      sendResponse({ name: a });
  }
);