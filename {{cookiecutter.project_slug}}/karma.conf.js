const webpackConfig = require('./webpack.config.js');

module.exports = (config) => {
    config.set({
        frameworks: ['mocha', 'chai'],

        files: [
            '{{cookiecutter.project_slug}}/static/js/**/*.spec.js',
        ],

        preprocessors: {
            '**/*.spec.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        reporters: ['spec'],

        browsers: ['Chrome']
    })
};
