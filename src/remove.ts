import basePullAt from './.internal/basePullAt.js';

/**
 * 移除数组中predicate（断言）返回为真值的所有元素，
 * 并返回移除元素组成的数组。predicate（断言） 会传入3个参数： (value, index, array)。
 *
 * **Note:** 和_.filter不同, 这个方法会改变数组 array。使用_.pull来根据提供的value值从数组中移除元素。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new array of removed elements.
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, reject, filter
 * @example
 *
 * const array = [1, 2, 3, 4]
 * const evens = remove(array, n => n % 2 === 0)
 *
 * console.log(array)
 * // => [1, 3]
 *
 * console.log(evens)
 * // => [2, 4]
 */
function remove(array:any [], predicate):any [] {
    const result:any [] = [];
    if (!(array != null && array.length)) {
        return result;
    }
    let index = -1;
    const indexes:any [] = [];
    const { length } = array;

    while (++index < length) {
        const value = array[index];
        if (predicate(value, index, array)) {
            result.push(value);
            indexes.push(index);
        }
    }
    basePullAt(array, indexes);
    return result;
}

export default remove;
