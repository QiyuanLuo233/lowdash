import some from './some.js';

/**
 * 创建一个函数，传入提供的参数的函数并调用 predicates 判断是否 存在 有真值。
 *
 * @since 1.0.0
 * @category Util
 * @param {Function[]} [predicates=[identity]]
 *  The predicates to check.
 * @returns {Function} Returns the new function.
 * @example
 *
 * const func = overSome([Boolean, isFinite])
 *
 * func('1')
 * // => true
 *
 * func(null)
 * // => true
 *
 * func(NaN)
 * // => false
 */
function overSome(iteratees) {
    return function (...args) {
        return some(iteratees, (iteratee) => iteratee.apply(this, args));
    };
}

export default overSome;
