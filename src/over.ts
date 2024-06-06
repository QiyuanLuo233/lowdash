import map from './map.js';

/**
 * 创建一个函数，传入提供的参数的函数并调用 iteratees 返回结果。
 *
 * @since 1.0.0
 * @category Util
 * @param {Function[]} [iteratees=[identity]]
 *  The iteratees to invoke.
 * @returns {Function} Returns the new function.
 * @example
 *
 * const func = over([Math.max, Math.min])
 *
 * func(1, 2, 3, 4)
 * // => [4, 1]
 */
function over(iteratees) {
    return function (...args) {
        return map(iteratees, (iteratee) => iteratee.apply(this, args));
    };
}

export default over;
