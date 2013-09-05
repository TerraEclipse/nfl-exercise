var players = require('../data/Player.2012.json')
  , teams = require('../data/Team.2012.json')
  , data = module.exports = {};

function sortBy (prop) {
  return function (a, b) {
    if (a[prop] < b[prop]) return -1;
    if (a[prop] > b[prop]) return 1;
    return 0;
  };
}

data.teamsByKey = teams.reduce(function (teams, team) {
  teams[team.Key] = team;
  return teams;
}, {});

data.playersById = players.reduce(function (players, player) {
  players[player.PlayerID] = player;
  return players;
}, {});

data.getDivisionTeams = function (conference, division) {
  return teams.filter(function (team) {
    return team.Conference === conference && team.Division === division;
  }).sort(sortBy('Name'));
};

data.conferences = ['AFC', 'NFC'];
data.divisions = ['North', 'South', 'East', 'West'];