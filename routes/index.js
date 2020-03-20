var express = require('express');
var router = express.Router();
const https = require('https');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node App' });
});

router.post('/ville', async function(req, res, next) {
  const data = await requestCityData(req.body.ville);
  const longt = Number(data.longt);
  const latt = Number(data.latt);
  res.render('ville', {
    ville: req.body.ville,
    missingCoords: isNaN(longt) || longt === 0,
    longt: longt,
    latt: latt
  });
});

module.exports = router;
