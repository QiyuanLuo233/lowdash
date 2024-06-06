/**
 *创建一个针对断言函数 func 结果取反的函数。 
 func 断言函数被调用的时候，this 绑定到创建的函数，并传入对应参数。
 *
 * @since 1.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 === 0
 * }
 *
 * filter([1, 2, 3, 4, 5, 6], negate(isEven))
 * // => [1, 3, 5]
 */
function negate(predicate) {
    if (typeof predicate !== 'function') {
        throw new TypeError('Expected a function');
    }
    return function (...args) {
        return !predicate.apply(this, args);
    };
}

export default negate;
