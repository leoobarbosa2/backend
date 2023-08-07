const server = require('./app');
require('./database/index');

server.listen(process.env.PORT || 3000);
