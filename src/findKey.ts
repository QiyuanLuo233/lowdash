/**
 * 这个方法类似_.find 。 除了它返回最先被 predicate 判断为真值的元素 key，而不是元素本身。
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {string|undefined} Returns the key of the matched element,
 *  else `undefined`.
 * @see find, findIndex, findLast, findLastIndex, findLastKey
 * @example
 *
 * const users = {
 *   'barney':  { 'age': 36, 'active': true },
 *   'fred':    { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1,  'active': true }
 * }
 *
 * findKey(users, ({ age }) => age < 40)
 * // => 'barney' (iteration order is not guaranteed)
 */
function findKey(object, predicate) {
    if (object == null) {
        return undefined;
    }
    const keys = Object.keys(object);
    for (let i = 0, { length } = keys; i < length; i += 1) {
        const key = keys[i];
        const value = object[key];
        if (predicate(value, key, object)) {
            return key;
        }
    }
    return undefined;
}

export default findKey;
