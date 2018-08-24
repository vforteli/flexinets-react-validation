var path = require('path');

module.exports = {
    mode: 'production',
    entry: ['babel-polyfill', './index.js'],
    output: {
        path: path.resolve('lib'),
        filename: 'flexinets-react-validation.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    },
    externals: {
        'react': 'commonjs react',
        'prop-types': 'prop-types'
    }
}