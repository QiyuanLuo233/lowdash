/**
 * 获取数组 array 的第一个元素。
 *
 * @since 1.0.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @see last
 * @example
 *
 * head([1, 2, 3])
 * // => 1
 *
 * head([])
 * // => undefined
 */
function head(array:any) {
    return array != null && array.length ? array[0] : undefined;
}

export default head;
