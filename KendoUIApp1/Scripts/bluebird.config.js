/// <reference types="bluebird" />
System.register(["bluebird"], function (exports_1, context_1) {
    "use strict";
    var bluebird_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (bluebird_1_1) {
                bluebird_1 = bluebird_1_1;
            }
        ],
        execute: function () {/// <reference types="bluebird" />
            // Configure
            bluebird_1.Promise.config({
                longStackTraces: false,
                warnings: false
            });
        }
    };
});
//# sourceMappingURL=bluebird.config.js.map