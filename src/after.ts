/**
 * _.before的反向函数;此方法创建一个函数，当他被调用n或更多次之后将马上触发func 
 *
 * @since 1.0.0
 * @category Function
 * @param {number} n The number of calls before `func` is invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * const saves = ['profile', 'settings']
 * const done = after(saves.length, () => console.log('done saving!'))
 *
 * forEach(saves, type => asyncSave({ 'type': type, 'complete': done }))
 * // => Logs 'done saving!' after the two async saves have completed.
 */
function after(n:number, func: Function) {
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }
    n = n || 0;
    return function (this: any, ...args: any[]) {
        if (--n < 1) {
            return func.apply(this, args);
        }
    };
}

export default after;
