"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let performance;
if (!performance)
    performance = require('perf_hooks').performance;
const timeit = function () {
    return function (target, propertyKey, descriptor) {
        let func = descriptor.value;
        descriptor.value = function (...args) {
            const name = `${this.constructor.name}.${func.name}`;
            const start = performance.now();
            var result = func.apply(this, args);
            const time = performance.now() - start;
            let timing = timeit.timings[name] || {
                count: 0,
                times: []
            };
            ++timing.count;
            timing.times.push(time);
            timeit.timings[name] = timing;
            return result;
        };
    };
};
exports.timeit = timeit;
timeit.timings = new Array();
//# sourceMappingURL=index.js.map