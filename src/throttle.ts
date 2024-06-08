import debounce from './debounce.js';
import isObject from './isObject.js';

/**
 * 创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。
 *  该函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。
 *  可以提供一个 options 对象决定如何调用 func 方法， 
 * options.leading 与|或 options.trailing 决定 wait 前后如何触发。
 *  func 会传入最后一次传入的参数给这个函数。 随后调用的函数返回是最后一次 func 调用的结果。
 *
 * **Note:** 如果 leading 和 trailing 都设定为 true
 *  则 func 允许 trailing 方式调用的条件为: 在 wait 期间多次调用。
 * 如果 wait 为 0 并且 leading 为 false, func调用将被推迟到下一个点，类似setTimeout为0的超时
 * 查看David Corbacho's article 了解_.throttle 与_.debounce 的区别。
 * [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 *
 * @since 1.0.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0]
 *  The number of milliseconds to throttle invocations to; if omitted,
 *  `requestAnimationFrame` is used (if available).
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', throttle(updatePosition, 100))
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * const throttled = throttle(renewToken, 300000, { 'trailing': false })
 * jQuery(element).on('click', throttled)
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel)
 */
function throttle(func, wait:number, options) {
    let leading = true;
    let trailing = true;

    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }
    if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
        leading,
        trailing,
        maxWait: wait,
    });
}

export default throttle;
