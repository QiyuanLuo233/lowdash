/**
 * 延迟 wait 毫秒后调用 func。 调用时，任何附加的参数会传给func。
 *
 * @since 1.0.0
 * @category Function
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * delay(text => console.log(text), 1000, 'later')
 * // => Logs 'later' after one second.
 */
function delay(func: any, wait: number, ...args: any[]) {
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    return setTimeout(func, +wait || 0, ...args);
}

export default delay;
