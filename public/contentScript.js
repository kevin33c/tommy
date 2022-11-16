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
      var name = document.getElementsByTagName("h1")[0].innerHTML
      var address = document.getElementsByClassName("text-body-small inline t-black--light break-words")[0].innerHTML.trim().split(",");

      var profile = {
        name: name,
        city: address[0],
        region: address[1],
        country: address[2],
      }

      console.log(profile);

      sendResponse({
        name: name,
        city: address[0],
        region: address[1],
        country: address[2],
      });
  }
);