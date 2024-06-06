import reduce from './reduce.js';

/**
 * 创建一个分成两组的元素数组，第一组包含predicate（断言函数）返回为 truthy（真值）的元素，
 * 第二组包含predicate（断言函数）返回为 falsey（假值）的元素。predicate 调用1个参数：(value)。
 *
 * @since 1.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the array of grouped elements.
 * @see groupBy, keyBy
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ]
 *
 * partition(users, ({ active }) => active)
 * // => objects for [['fred'], ['barney', 'pebbles']]
 */
function partition(collection, predicate) {
    return reduce(
        collection,
        (result, value) => {
            result[predicate(value) ? 0 : 1].push(value);
            return result;
        },
        [[], []],
    );
}

export default partition;
