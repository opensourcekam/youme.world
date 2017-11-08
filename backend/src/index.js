const port = process.env.PORT || 3003;
const app = require('express')();
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const server = http.createServer(app);
const mongoose = require('mongoose');
const requireAuth = require('./middlewares').requireAuth;

mongoose.connect('mongodb://robinsonkameron:MKE-86q-fuy-ApD@ds249545.mlab.com:49545/youmeworld', { useMongoClient: true });

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('*', requireAuth);

require('./router')(app);

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

