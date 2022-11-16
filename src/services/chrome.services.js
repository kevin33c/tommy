/*global chrome*/

export class ChromeServices {

  async getProfileData() {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const res = await chrome.tabs.sendMessage(tabs[0].id, { action: "GET-PROFILE" });
    console.log(res);
    return await res;
  }

}