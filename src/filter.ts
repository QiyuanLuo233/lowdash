/**
 * 遍历 collection（集合）元素，
 * 返回 predicate（断言函数）返回真值 的所有元素的数组。 
 * predicate（断言函数）调用三个参数：(value, index|key, collection)。
 *
 * **Note:** Unlike `remove`, this method returns a new array.
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * filter(users, ({ active }) => active)
 * // => objects for ['barney']
 */
function filter(array:any [], predicate:any) {
    let index = -1;
    let resIndex = 0;
    const length = array == null ? 0 : array.length;
    const result:any [] = [];

    while (++index < length) {
        const value = array[index];
        if (predicate(value, index, array)) {
            result[resIndex++] = value;
        }
    }
    return result;
}

export default filter;
