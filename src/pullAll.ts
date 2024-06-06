import basePullAll from './.internal/basePullAll.js';

/**
 * 这个方法类似_.pull，区别是这个方法接收一个要移除值的数组。
 *
 * **Note:** Unlike `difference`, this method mutates `array`.
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @returns {Array} Returns `array`.
 * @see pull, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const array = ['a', 'b', 'c', 'a', 'b', 'c']
 *
 * pullAll(array, ['a', 'c'])
 * console.log(array)
 * // => ['b', 'b']
 */
function pullAll(array:any [], values):any [] {
    return array != null && array.length && values != null && values.length
        ? basePullAll(array, values)
        : array;
}

export default pullAll;
