import baseWhile from './.internal/baseWhile.js';

/**
 * 从array数组的最后一个元素开始提取元素，
 * 直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': true }
 * ]
 *
 * takeRightWhile(users, ({ active }) => active)
 * // => objects for ['fred', 'pebbles']
 */
function takeRightWhile(array:any [], predicate):any [] {
    return array != null && array.length ? baseWhile(array, predicate, false, true) : [];
}

export default takeRightWhile;
