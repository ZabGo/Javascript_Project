use wonders;
db.monumentInfo.drop();

const Users = function () {
}

const run = function () {
  use wonders

  db.userDetails.insertMany([
  	{
      name: "Test User One"
  ]);
};


module.exports = User;
