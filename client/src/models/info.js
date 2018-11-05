const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Info = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};

Info.prototype.bindEvents = function () {

};

Info.prototype.getData = function () {
  this.request.get()
    .then((data) => {
      PubSub.publish('Info:mapInfoData', data);
    })
    .catch(console.error);
};

//
module.exports = Info;
