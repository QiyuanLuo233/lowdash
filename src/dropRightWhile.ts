import baseWhile from './.internal/baseWhile.js';

/**
 * 创建一个切片数组，去除array中从 predicate 
 * 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)。
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
 * dropRightWhile(users, ({ active }) => active)
 * // => objects for ['barney']
 */
function dropRightWhile(array:any [], predicate:any) {
    return array != null && array.length ? baseWhile(array, predicate, true, true) : [];
}

export default dropRightWhile;
