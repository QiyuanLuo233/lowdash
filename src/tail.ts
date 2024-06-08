/**
 * 获取除了array数组第一个元素以外的全部元素
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * tail([1, 2, 3])
 * // => [2, 3]
 */
function tail(array:any []):any [] {
    const length = array == null ? 0 : array.length;
    if (!length) {
        return [];
    }
    const [, ...result] = array;
    return result;
}

export default tail;
