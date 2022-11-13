/*global chrome*/

export class ChromeServices {

  async getProfileData() {
    /*
    chrome.tabs.query({ active: true, currentWindow: true })
      .then(function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "GET-PROFILE" })
          .then(function (res) {
            profile = res.name
            console.log(profile);
          }
          )
          .then(function(res){
            return profile;
          })
      });

      return await profile;
    */
    /*
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "GET-PROFILE" }, function (res) {
        profile = res.name
      });
    });

    return await profile;
    */
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const res = await chrome.tabs.sendMessage(tabs[0].id, { action: "GET-PROFILE" });
    return await res.name;
  }

}