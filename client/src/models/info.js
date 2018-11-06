const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Info = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
  this.data = "";
};

Info.prototype.bindEvents = function () {
  PubSub.subscribe('MapInfoView:monumentSelected', (evt) => {
    //call new function (evt)
    console.log(evt);
    console.log(this.data);
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

// new function(evt)
//match latitude & lonngitude from event vs evry wonder
// publish wonder 



//
module.exports = Info;
