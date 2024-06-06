import every from './every.js';

/**
 * 建一个函数，传入提供的参数的函数并调用 predicates 判断是否 全部 都为真值。
 *
 * @since 1.0.0
 * @category Util
 * @param {Function[]} [predicates=[identity]]
 *  The predicates to check.
 * @returns {Function} Returns the new function.
 * @example
 *
 * const func = overEvery([Boolean, isFinite])
 *
 * func('1')
 * // => true
 *
 * func(null)
 * // => false
 *
 * func(NaN)
 * // => false
 */
function overEvery(iteratees) {
    return function (...args) {
        return every(iteratees, (iteratee) => iteratee.apply(this, args));
    };
}

export default overEvery;
