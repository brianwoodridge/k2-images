const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        extensions: ['.ts','.tsx','.scss']
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
    // module: {
    //     rules: [
    //         {
    //             test: /\.(ts|tsx)$/,
    //             loader: '',
    //             // include: [path.resolve(__dirname, 'yourAppPath')],
    //             exclude: [/node_modules/],
    //         },
    //     ]
    // }
});

mix.ts('resources/js/index.tsx', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/form.scss', 'public/css');
