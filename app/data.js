var players = require('../data/Player.2012.json')
  , teams = require('../data/Team.2012.json')
  , data = module.exports = {};


data.conferences = ['AFC', 'NFC'];
data.divisions = ['North', 'South', 'East', 'West'];
data.playerTeams = ['ARI', 'ATL', 'BAL', 'BUF'];

data.teamsByKey = teams.reduce(function (teams, team) {
  teams[team.Key] = team;
  return teams;
}, {});

data.playersById = players.reduce(function (players, player) {
  player.TeamName = data.teamsByKey[player.Team].Name;
  players[player.PlayerID] = player;
  return players;
}, {});

data.getPlayers = function () {
  return players
    .filter(function (player) {
      return player.Status === 'Active';
    })
    .map(function (player) {
      player.showTeam = true;
      player.TeamName = data.teamsByKey[player.Team].Name;
      return player;
    })
    .sort(sortBy('Name'));
};

data.getDivisionTeams = function (conference, division) {
  return teams
    .filter(function (team) {
      return team.Conference === conference && team.Division === division;
    })
    .map(function (team) {
      if (data.playerTeams.indexOf(team.Key) >= 0) {
        team.hasPlayers = true;
      }
      return team;
    })
    .sort(sortBy('Name'));
};

data.getTeamPlayers = function (key) {
  var categories = players
    .filter(function (player) {
      return (player.Team === key) && (player.Status === 'Active');
    })
    .reduce(function (cats, player) {
      cats[player.PositionCategory] = cats[player.PositionCategory] || [];
      cats[player.PositionCategory].push(player);
      return cats;
    }, {});

  Object.keys(categories).forEach(function (cat) {
    categories[cat].sort(sortBy('Position', sortBy('DepthOrder')));
  });

  return categories;
};

function sortBy (prop, tie) {
  return function (a, b) {
    if (a[prop] < b[prop]) return -1;
    if (a[prop] > b[prop]) return 1;
    return tie ? tie(a, b) : 0;
  };
}