const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Info = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};

Info.prototype.bindEvents = function () {
  const data = getData();
  PubSub.publish('Info:mapInfoData', data);
};
