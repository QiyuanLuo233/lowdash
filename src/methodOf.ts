import invoke from './invoke.js';

/**
 * _.method的反向版。 这个创建一个函数调用给定 object 的 path 上的方法， 
 * 任何附加的参数都会传入这个调用函数
 *
 * @since 1.0.0
 * @category Util
 * @param {Object} object The object to query.
 * @param {Array} [args] The arguments to invoke the method with.
 * @returns {Function} Returns the new invoker function.
 * @example
 *
 * const array = times(3, i => () => i)
 * const object = { 'a': array, 'b': array, 'c': array }
 *
 * map(['a[2]', 'c[0]'], methodOf(object))
 * // => [2, 0]
 *
 * map([['a', '2'], ['c', '0']], methodOf(object))
 * // => [2, 0]f
 */
function methodOf(object, args) {
    return (path) => invoke(object, path, args);
}

export default methodOf;
