module.exports = function(app) {
  var express = require('express');
  var realfeelzUiServerRouter = express.Router();

  realfeelzUiServerRouter.get('/', function(req, res) {
    res.send({"realfeelz-ui-server":[1, 2, 3, 4]});
  });

  app.use('/api/realfeelz-ui-server', realfeelzUiServerRouter);
};
