import unzipWith from './unzipWith.js';

/**
 * 这个方法类似于_.zip，不同之处在于它接受一个 iteratee（迭代函数），
 * 来 指定分组的值应该如何被组合。 该iteratee调用每个组的元素： (...group).
 *
 * @since 1.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to process.
 * @param {Function} iteratee The function to combine
 *  grouped values.
 * @returns {Array} Returns the new array of grouped elements.
 * @see unzip, unzipWith, zip, zipObject, zipObjectDeep, zipWith
 * @example
 *
 * zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c)
 * // => [111, 222]
 */
function zipWith(...arrays) {
    const length = arrays.length;
    let iteratee = length > 1 ? arrays[length - 1] : undefined;
    iteratee = typeof iteratee === 'function' ? (arrays.pop(), iteratee) : undefined;
    return unzipWith(arrays, iteratee);
}

export default zipWith;
