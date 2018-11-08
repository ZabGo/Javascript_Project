use wonders;
db.userDetails.drop();


  db.userDetails.insertMany([
  	{
      game: 1,
      points: 30
    },
  	{
      game: 2,
      points: 40
    },
  	{
      game: 3,
      points: 20
    }
  ]);
