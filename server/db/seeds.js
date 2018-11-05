const Monuments = require('./monument_seeds.js');
const Questions = require('./questions_and_andswers_seeds.js');
const Users = require('./user_info_seed.js');

use wonders
db.dropDatabase();

Monuments.run();
Questions.run();
// Users.run();
