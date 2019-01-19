//Creates empty friend array to store data that will be pushed.
var friends = [{
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
];

//Uses constructor to be applied to friend
function Friend(name, imgURL, scores) {
  this.name = name;
  this.imgURL = imgURL;
  this.scores = scores;
}
var actions = {
  addAFriend: function(name, imgURL, scores) {
    var friendVar = new Friend(name, imgURL, scores);
    // console.log(friendVar);
    friends.push(friendVar);
    return friendVar;
  },
  getFriends: function() {
    return friends;
  }
};

module.exports = actions;