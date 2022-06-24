const express = require('express');
const router = express.Router();
const db = require("../config/db")

router.get('/live', function(req, res, next) {
  res.send({
      status: "OK"
  })
});

router.get('/ready', async function(req, res, next) {

    let result = await db.query("SELECT 1", function (error, results, fields) {
        //if (error) throw error;
        console.log(error);
        console.log(result);
        res.status(error ? 500: 200).send({
            status: error ? "DOWN": "OK"
        })
    });
});



module.exports = router;
