var path = require('path');

module.exports = {
    mode: 'production',
    entry: ['./index.js'],
    devtool: 'source-map',
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
        'react': 'react',
        'prop-types': 'prop-types'
    }
}