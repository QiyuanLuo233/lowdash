import basePullAll from './.internal/basePullAll.js';

/**
 * 这个方法类似于_.pullAll ，区别是这个方法接受一个 iteratee（迭代函数） 
 * 调用 array 和 values的每个值以产生一个值，通过产生的值进行了比较。
 * iteratee 会传入一个参数： (value)。
 *
 * **Note:**  不同于_.differenceBy, 这个方法会改变数组 array。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns `array`.
 * @see pull, pullAll, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }]
 *
 * pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x')
 * console.log(array)
 * // => [{ 'x': 2 }]
 */
function pullAllBy(array:any [], values, iteratee) {
    return array != null && array.length && values != null && values.length
        ? basePullAll(array, values, iteratee)
        : array;
}

export default pullAllBy;
