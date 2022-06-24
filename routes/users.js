const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    id: 123,
    name: `k8s-fundamentals-basic-app`
  });
});

module.exports = router;
