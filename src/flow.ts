/**
 * 创建一个函数。 返回的结果是调用提供函数的结果，
 * this 会绑定到创建函数。 每一个连续调用，传入的参数都是前一个函数返回的结果。
 *
 * @since 1.0.0
 * @category Util
 * @param {Function[]} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see flowRight
 * @example
 *
 * import add from 'lodash/add'
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * const addSquare = flow(add, square)
 * addSquare(1, 2)
 * // => 9
 */
function flow(...funcs) {
    const length = funcs.length;
    let i = length;
    while (i--) {
        if (typeof funcs[i] !== 'function') {
            throw new TypeError('Expected a function');
        }
    }
    return function (this: any, ...args: any[]) {
        let j = 0;
        let result = length ? funcs[j].apply(this, args) : args[0];
        while (++j < length) {
            result = funcs[j].call(this, result);
        }
        return result;
    };
}

export default flow;
