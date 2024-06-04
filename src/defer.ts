/**
 * 推迟调用func，直到当前堆栈清理完毕。 调用时，任何附加的参数会传给func。
 *
 * @since 1.0.0
 * @category Function
 * @param {Function} func The function to defer.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * defer(text => console.log(text), 'deferred')
 * // => Logs 'deferred' after one millisecond.
 */
function defer(func: any, ...args: any[]) {
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    return setTimeout(func, 1, ...args);
}

export default defer;
