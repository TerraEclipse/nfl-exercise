var middler = require('middler')
  , buffet = require('buffet')({root: './public'})
  , templ = require('templ')('./views')
  , server = require('http').createServer()
  , router = middler(server)
  , data = require('./data');

// Add buffet middleware.
router.add(-1000, buffet);
router.add(1000, buffet.notFound);

// Add templ middleware.
router.add(-900, templ);

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/teams', function (req, res, next) {
  res.vars.conferences = data.conferences.map(function (conference) {
    return {
      name: conference,
      divisions: data.divisions.map(function (division) {
        return {
          name: division,
          teams: data.getDivisionTeams(conference, division)
        };
      })
    };
  });
  res.render('teams');
});

router.get('/teams/:key', function (req, res, next) {
  res.vars.team = data.teamsByKey[req.params.key];
  res.vars.players = data.getTeamPlayers(req.params.key);
  res.render('team');
});

router.get('/players', function (req, res, next) {
  res.vars.players = data.getPlayers();
  res.render('players');
});

router.get('/players/:id', function (req, res, next) {
  var player = data.playersById[req.params.id];
  Object.keys(player).forEach(function (key) {
    res.vars[key] = player[key];
  });
  res.render('player');
});

server.listen(3000, function () {
  console.log('Started server on port ' + 3000);
});