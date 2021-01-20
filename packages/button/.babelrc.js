module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/typescript',
  ],
  plugins: [
    [
      "emotion",
      {
        "sourceMap": true,
        "autoLabel": process.env.NODE_ENV !== 'production',
        "labelFormat": "[filename]--[local]",
        "cssPropOptimization": true
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-transform-runtime',
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
  ],
};
