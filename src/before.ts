/**
 * 创建一个调用func的函数，通过this绑定和创建函数的参数调用func，调用次数不超过 n 次。 之后再调用这个函数，将返回一次最后调用func的结果。
 *
 * @since 1.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', before(5, addContactToList))
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n:number, func:any) {
    let result :any;
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }
    return function (...args) {
        if (--n > 0) {
            result = func.apply(this, args);
        }
        if (n <= 1) {
            func = undefined;
        }
        return result;
    };
}

export default before;
