const path = require('path');
const { override, fixBabelImports, addLessLoader, disableEsLint, addWebpackAlias, addDecoratorsLegacy, addBabelPresets, addBabelPlugins} = require('customize-cra');

const antVar = require('./src/style/ant-theme.js');//ant自定义变量
const globalVar = require('./src/style/global-val.js');//全局变量
module.exports = override(
     addWebpackAlias({
        ['@api']: path.resolve(__dirname,"src/api"),
         ['@']: path.resolve(__dirname, "src"),
    }),
    // disableEsLint(),
    addDecoratorsLegacy(),
    addBabelPresets("@babel/preset-react"),
    addBabelPlugins("react-hot-loader/babel","@babel/plugin-syntax-dynamic-import"),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        // style: 'css',
        style:true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: antVar,
        globalVars:globalVar
    })
);