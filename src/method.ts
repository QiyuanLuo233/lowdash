import invoke from './invoke.js';

/**
 * 创建一个调用给定对象 path 上的函数。 任何附加的参数都会传入这个调用函数中。
 *
 * @since 1.0.0
 * @category Util
 * @param {Array|string} path The path of the method to invoke.
 * @param {Array} [args] The arguments to invoke the method with.
 * @returns {Function} Returns the new invoker function.
 * @example
 *
 * const objects = [
 *   { 'a': { 'b': () => 2 } },
 *   { 'a': { 'b': () => 1 } }
 * ]
 *
 * map(objects, method('a.b'))
 * // => [2, 1]
 *
 * map(objects, method(['a', 'b']))
 * // => [2, 1]
 */
function method(path, args) {
    return (object) => invoke(object, path, args);
}

export default method;
