# magix-combine [![Version Number](https://img.shields.io/npm/v/magix-combine.svg)](https://github.com/thx/magix-combine/ "Version Number") [![THX Team](https://img.shields.io/badge/team-THX-green.svg)](https://thx.github.io/ "THX Team") [![License](https://img.shields.io/badge/license-MIT-orange.svg)](https://opensource.org/licenses/MIT "License") [![download](https://img.shields.io/npm/dm/magix-combine.svg)](https://www.npmjs.com/package/magix-combine)
合并Magix View的html,js,css文件成一个js文件，需要配合其它工具使用。

# 功能
1. 合并html,css,js成一个js文件。[为什么不在打包上线时合并？](https://github.com/thx/magix-combine/issues/5)
2. css只在当前区块内生效。[关于style的scope](https://github.com/thx/magix-combine/issues/6) [css模块](http://www.75team.com/post/1049.html)
3. 智能子模板离线数据提取及预处理
4. CommonJS的写法，由工具加上相应的web loader
5. 检测项目中样式：未使用的、重名的、不推荐的写法等问题。
6. 检测模板中模板：使用未声明的选择器、未声明的变量、参数传递等问题

## gulp使用示例
[gulp使用示例](https://github.com/thx/magix-combine/issues/16)

## @占位符
[@占位符说明](https://github.com/thx/magix-combine/issues/15)


## 配置参数
[配置参数](https://github.com/thx/magix-combine/issues/17)
