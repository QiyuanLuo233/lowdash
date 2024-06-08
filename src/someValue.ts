/**
 * 检查对象中还否有元素值符合条件，如果有立即返回true并终止执行。
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * someValues({ 'a': 0, 'b': 'yes', 'c': false }, Boolean)
 * // => true
 */
function someValues(object, predicate):boolean {
    object = Object(object);
    const props = Object.keys(object);

    for (const key of props) {
        if (predicate(object[key], key, object)) {
            return true;
        }
    }
    return false;
}

export default someValues;
