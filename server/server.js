const express = require('express');
const morgan = require('morgan');
const proxy = require('http-proxy-middleware');

const app = express();

app.use(morgan('tiny'));
app.use('/watches/:wid', express.static('public'));

app.use('/api/watches/:wid/photos', proxy({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/api/watches/:wid/summary', proxy({ target: 'http://54.87.165.253', changeOrigin: true }));
app.use('/api/watches/:wid/details', proxy({ target: 'http://13.57.38.154', changeOrigin: true }));
app.use('/api/watches/:wid/reviews', proxy({ target: 'http://localhost:3004', changeOrigin: true }));

app.listen(3000, () => {
  console.log('listening on port 3000...');
});