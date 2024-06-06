import baseOrderBy from './.internal/baseOrderBy.js';

/**
 * 此方法类似于_.sortBy，除了它允许指定 iteratee（迭代函数）结果如何排序。
 *  如果没指定 orders（排序），所有值以升序排序。 
 * 否则，指定为"desc" 降序，或者指定为 "asc" 升序，排序对应值。
 *
 * @since 1.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[identity]]
 *  The iteratees to sort by.
 * @param {(string|function)[]} [orders] The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 * @see reverse
 * @example
 *
 * const users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ]
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * orderBy(users, ['user', 'age'], ['asc', 'desc'])
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 *
 * // Sort by `user` then by `age` using custom compare functions for each
 * orderBy(users, ['user', 'age'], [
 *   (a, b) => a.localeCompare(b, 'de', { sensitivity: 'base' }),
 *   (a, b) => a - b,
 * ])
 *
 */
function orderBy(collection, iteratees, orders:string []):any [] {
    if (collection == null) {
        return [];
    }
    if (!Array.isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
    }
    if (!Array.isArray(orders)) {
        orders = orders == null ? [] : [orders];
    }
    return baseOrderBy(collection, iteratees, orders);
}

export default orderBy;
