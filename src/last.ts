/**
 * 获取数组最后一项元素
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * last([1, 2, 3])
 * // => 3
 */
function last(array:any []):any {
    const length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
}

export default last;
