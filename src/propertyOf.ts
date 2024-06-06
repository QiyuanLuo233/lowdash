import baseGet from './.internal/baseGet.js';

/**
 * _.property的反相版本。 这个方法创建的函数返回给定 path 在object上的值。
 *
 * @since 1.0.0
 * @category Util
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * const array = [0, 1, 2]
 * const object = { 'a': array, 'b': array, 'c': array }
 *
 * map(['a[2]', 'c[0]'], propertyOf(object))
 * // => [2, 0]
 *
 * map([['a', '2'], ['c', '0']], propertyOf(object))
 * // => [2, 0]
 */
function propertyOf(object) {
    return (path) => (object == null ? undefined : baseGet(object, path));
}

export default propertyOf;
