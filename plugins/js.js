let path = require('path');
let fs = require('fs');
let fd = require('./util-fd');
let jsContent = require('./js-content');
let deps = require('./util-deps');
let configs = require('./util-config');
let slog = require('./util-log');
//文件处理
let processFile = (from, to, inwatch) => { // d:\a\b.js  d:\c\d.js
    return new Promise((resolve, reject) => {
        from = path.resolve(from);
        to = path.resolve(to);
        let promise = Promise.resolve();
        if (inwatch && deps.inDependencies(from)) {
            promise = deps.runFileDepend(from);
        }
        if (fs.existsSync(from)) {
            if (configs.compileFileExtNamesReg.test(from)) {
                promise.then(() => {
                    return jsContent.process(from, to, 0, inwatch);
                }).then((e) => {
                    if (e.writeFile) {
                        to = to.replace(configs.compileFileExtNamesReg, '.js');
                        configs.beforeWriteFile(e);
                        fd.write(to, e.content);
                    }
                    if (configs.log && inwatch) {
                        slog.ever('finish:', from.green);
                    }
                    resolve();
                }).catch(reject);
            } else {
                promise.then(resolve, reject);
            }
        } else {
            promise.then(resolve, reject);
        }
    });
};
module.exports = deps.setContext({
    process: processFile
});