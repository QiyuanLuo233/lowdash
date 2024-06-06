import filter from './filter.js';
import filterObject from './filterObject.js';
import negate from './negate.js';

/**
 * _.filter的反向方法;此方法 返回 predicate（断言函数） 
 * 不 返回 truthy（真值）的collection（集合）元素（注释：非真）。
 *
 * @since 1.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, filter
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * reject(users, ({ active }) => active)
 * // => objects for ['fred']
 */
function reject(collection, predicate) {
    const func = Array.isArray(collection) ? filter : filterObject;
    return func(collection, negate(predicate));
}

export default reject;
