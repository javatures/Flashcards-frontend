module.exports = {
    devtool: 'source-map',
    output: {
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        },
        {
            test: /\.ts(x?)$/,
            use: 'ts-loader',
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
                {
                    loader: 'ts-loader'
                }
            ]
        },
        {
            test: /\.css$/i,
            loader: "css-loader",
            options: {
                import: true,
            }
        },
        {
            test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
            loader: "url-loader",
            options: {
                limit: 8192,
            }
        }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts']
    }
};

