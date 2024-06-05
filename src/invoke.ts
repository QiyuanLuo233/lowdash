import castPath from './.internal/castPath.js';
import last from './last.js';
import parent from './.internal/parent.js';
import toKey from './.internal/toKey.js';

/**
 * 调用object对象path上的方法。
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the method to invoke.
 * @param {Array} [args] The arguments to invoke the method with.
 * @returns {*} Returns the result of the invoked method.
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] }
 *
 * invoke(object, 'a[0].b.c.slice', [1, 3])
 * // => [2, 3] slice掉了下标为1、3的值
 */
function invoke(object:any, path, args):any {
    path = castPath(path, object);
    object = parent(object, path);
    const func = object == null ? object : object[toKey(last(path))];
    return func == null ? undefined : func.apply(object, args);
}

export default invoke;
