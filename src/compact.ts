/**
 * 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”.
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */
function compact(array:any):any [] {
    let resIndex = 0;
    const result:any [] = [];

    if (array == null) {
        return result;
    }

    for (const value of array) {
        if (value) {
            result[resIndex++] = value;
        }
    }
    return result;
}

export default compact;
