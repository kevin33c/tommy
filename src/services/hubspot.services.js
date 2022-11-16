/*global chrome*/

export class HubSpotServices {

  async createContact() {

    //GET COOKIES potential way to get the auth token for hubspot
    chrome.cookies.get({ url: 'https://www.linkedin.com', name: 'li_gc' },
      function (cookie) {
        if (cookie) {
          console.log(cookie.value);
        }
        else {
          console.log('Can\'t get cookie! Check the name!');
        }
      });
  }

}