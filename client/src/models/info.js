const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Info = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
  this.data = "";
};

Info.prototype.bindEvents = function () {
  PubSub.subscribe('MapInfoView:monumentSelected', (evt) => {
    const data = this.data;
    matchWonder(evt, data);
    //call new function (evt)

  });
};

Info.prototype.getData = function () {
  this.request.get()
    .then((data) => {
      this.data = data;
      PubSub.publish('Info:mapInfoData', data);
    })
    .catch(console.error);
};
function matchWonder(userInput, data) {
  data.forEach((wonder) => {
    if (wonder.name == userInput.detail) {
      PubSub.publish('Info:wonderSelected', wonder);
    }
  })
};

module.exports = Info;
