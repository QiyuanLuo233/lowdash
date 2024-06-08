/**
 * 检查数组中是否有符合条件的项，如果有，立即终止执行并返回true
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * some([null, 0, 'yes', false], Boolean)
 * // => true
 */
function some(array:any [], predicate):boolean {
    let index = -1;
    const length = array == null ? 0 : array.length;

    while (++index < length) {
        if (predicate(array[index], index, array)) {
            return true;
        }
    }
    return false;
}

export default some;
