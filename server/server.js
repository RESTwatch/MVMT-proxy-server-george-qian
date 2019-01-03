const express = require('express');
const morgan = require('morgan');
const proxy = require('http-proxy-middleware');

const app = express();

app.use(morgan('tiny'));
app.use('/watches/:wid', express.static('public'));

app.use('/api/watches/:wid/details', proxy({ target: 'http://localhost:3003', changeOrigin: true }));

app.listen(3000, () => {
  console.log('listening on port 3000...');
});