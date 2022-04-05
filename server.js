const express = require('express');
const app = express();
const pool = require('./client');
const cors = require("cors");

const port = process.env.PORT || 8000;

app.use(cors());


app.get('/skills_and_technologies', (req, res) => {
    pool.query('SELECT * FROM "public"."skills" LIMIT 100', (err, results) => {
      if (err) {
        res.sendStatus(404);
      }
      res.status(200).json(results.rows);
    });
})

app.listen(port, () => console.log(`Listening on port ${port}`));
