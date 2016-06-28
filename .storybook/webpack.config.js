const path = require('path');
const jquery = require('jquery');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: ['style', 'raw'],
        include: path.resolve(__dirname, '../')
      }
    ],
  },
};