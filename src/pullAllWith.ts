import basePullAll from './.internal/basePullAll.js';

/**
 * 这个方法类似于_.pullAll，区别是这个方法接受 comparator 
 * 调用array中的元素和values比较。comparator 会传入两个参数：(arrVal, othVal)。
 *
 * **Note:** 不同于_.differenceBy, 这个方法会改变数组 array。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns `array`.
 * @see pull, pullAll, pullAllBy, pullAt, remove, reject
 * @example
 *
 * const array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }]
 *
 * pullAllWith(array, [{ 'x': 3, 'y': 4 }], isEqual)
 * console.log(array)
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
 */
function pullAllWith(array:any [], values:any [], comparator):any [] {
    return array != null && array.length && values != null && values.length
        ? basePullAll(array, values, undefined, comparator)
        : array;
}

export default pullAllWith;
