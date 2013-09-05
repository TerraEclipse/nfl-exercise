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
  res.render('teams');
});

router.get('/players', function (req, res, next) {
  res.render('players');
});

server.listen(3000, function () {
  console.log('Started server on port ' + 3000);
});