let performance: {now:Function};
if(!performance) performance = require('perf_hooks').performance;

interface Timeable { (): any; timings: any; }

const timeit:Timeable = <Timeable>function() {
    return function(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<Function>):void {
        let func: Function = descriptor.value;
        descriptor.value = function(...args:any[]):any {
            const name = `${this.constructor.name}.${func.name}`;
            const start = performance.now();
            var result = func.apply(this, args);
            const time = performance.now() - start;

            let timing = timeit.timings[name] || {
                count: 0,
                times:[]
            };

            ++timing.count;
            timing.times.push(time);

            timeit.timings[name] = timing;
            return result;
        }
    }
}

timeit.timings = new Array<Object>();

export {timeit}