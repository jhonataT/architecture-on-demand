// to build: yarn babel src/index.js --out-file dist/bundle.js

module.exports = {
    plugins: ["@babel/plugin-transform-runtime"],
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {
            runtime: 'automatic'
        }]
    ]
};