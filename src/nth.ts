import isIndex from './.internal/isIndex.js';

/**
 * 获取array数组的第n个元素。如果n为负数，
 * 则返回从数组结尾开始的第n个元素。（很鸡肋，原生就可以做到）
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=0] The index of the element to return.
 * @returns {*} Returns the nth element of `array`.
 * @example
 *
 * const array = ['a', 'b', 'c', 'd']
 *
 * nth(array, 1)
 * // => 'b'
 *
 * nth(array, -2)
 * // => 'c'
 */
function nth(array: any[], n: number) {
    const length = array == null ? 0 : array.length;
    if (!length) {
        return;
    }
    n += n < 0 ? length : 0;
    // eslint-disable-next-line consistent-return
    return isIndex(n, length) ? array[n] : undefined;
}

export default nth;
