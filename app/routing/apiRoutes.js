var data = require("../data/friends.js");

module.exports = function(app) {
  // GET requests
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  // POST request
  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    newFriend.routeName = newFriend.name.replace(/\s+/g, " ").toLowerCase();

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
  });

var totalDifference = 0;
//my current attempt at parsing the scores
for (var i = 0; i < friends.length - 1; i++) {
  console.log(friends[i].name);
  totalDifference = 0;

  for (var j = 0; j < 5; j++) {
    console.log(friends[i].name);
    totalDifference += Math.abs(
      parseInt(userScores[j] - parseInt(friends[i].scores[j]))
    );
    if (totalDifference <= bestMatch.friendDifference) {
      bestMatch.name = friends[i].name;
      bestMatch.photo = friends[i].photo;
      bestMatch.friendDifference = totalDifference;
    }
  }
}
friends.push(userData);

res.json(bestMatch);
};