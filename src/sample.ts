/**
 * 从collection（集合）中获得一个随机元素。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to sample.
 * @returns {*} Returns the random element.
 * @example
 *
 * sample([1, 2, 3, 4])
 * // => 2
 */
function sample(array):any {
    const length = array == null ? 0 : array.length;
    return length ? array[Math.floor(Math.random() * length)] : undefined;
}

export default sample;
