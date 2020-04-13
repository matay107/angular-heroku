const express = require('express');

const app = express();

app.use(express.static('./dist/angular-heroku-mon'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/angular-heroku-mon/index.html'));
});

app.listen(process.env.PORT || 8080);
