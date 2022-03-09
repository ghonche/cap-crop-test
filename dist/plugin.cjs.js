'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const customeCrop = core.registerPlugin('customeCrop', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.customeCropWeb()),
});

class customeCropWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    customeCropWeb: customeCropWeb
});

exports.customeCrop = customeCrop;
//# sourceMappingURL=plugin.cjs.js.map
