const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/getPhotos',
    createProxyMiddleware({
      target: 'https://www.wangluoguimi.com:8443/',
      changeOrigin: true,
    })
  );
  app.get('/abc', function (req, res) {
    res.send('Hello World')
  })
};
