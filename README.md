# react ts 插件开发模板
## 注意该插件是react插件开发的模板演示,如需要源码模板，请移至到https://github.com/zzxiexin/react-ts-npm-template.git
```javascript
{
  "name": "react-ts-npm-template", // 模板名称,npm install的插件名字
  "version": "1.0.3", // 版本号
  "main": "dist/index.js", // 插件入口文件
  "license": "MIT",
  "typings": "types/index.d.ts", // ts类型申明文件
  "files": [
    "dist",
    "package.json",
    "package-lock.json",
    "README.md"
  ], // file声明包内仅存在的文件名
  "scripts": {
    "prepublishOnly": "npm install && npm run build", // 发布时执行build命令
    "build": "webpack --config ./webpack.prod.config.js", // 生产脚本
    "start": "webpack serve --config ./webpack.dev.config.js" // 本地开发调试脚本
  },
  "repository": "https://github.com/zzxiexin/react-ts-npm-template.git", // 关联的git仓库
  "keywords": [
    "react",
    "component",
    "template",
    "npm"
  ], // npm 搜索的关键词
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }, // 项目依赖
  "devDependencies": {
    "@babel/core": "^7.18.5",
    "@babel/plugin-proposal-class-properties": "^7.17.12",
    "@babel/preset-env": "^7.18.2",
    "@babel/preset-react": "^7.17.12",
    "@babel/preset-typescript": "^7.17.12",
    "babel-loader": "^8.2.5",
    "clean-webpack-plugin": "^4.0.0",
    "css-loader": "^6.7.1",
    "css-minimizer-webpack-plugin": "^4.0.0",
    "html-webpack-plugin": "^5.5.0",
    "less": "^4.1.3",
    "less-loader": "^11.0.0",
    "style-loader": "^3.3.1",
    "ts-loader": "^9.3.1",
    "typescript": "^4.7.4",
    "webpack": "^5.73.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.9.2",
    "webpack-merge": "^5.8.0"
  } // 开发依赖
}

```