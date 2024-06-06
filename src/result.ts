import castPath from './.internal/castPath.js';
import toKey from './.internal/toKey.js';

/**
 * 这个方法类似_.get， 除了如果解析到的值是一个函数的话，
 * 就绑定 this 到这个函数并返回执行后的结果。
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to resolve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c1': 3, 'c2': () => 4 } }] }
 *
 * result(object, 'a[0].b.c1')
 * // => 3
 *
 * result(object, 'a[0].b.c2')
 * // => 4
 *
 * result(object, 'a[0].b.c3', 'default')
 * // => 'default'
 *
 * result(object, 'a[0].b.c3', () => 'default')
 * // => 'default'
 */
function result(object, path, defaultValue) {
    path = castPath(path, object);

    let index = -1;
    let length = path.length;

    // Ensure the loop is entered when path is empty.
    if (!length) {
        length = 1;
        object = undefined;
    }
    while (++index < length) {
        let value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
            index = length;
            value = defaultValue;
        }
        object = typeof value === 'function' ? value.call(object) : value;
    }
    return object;
}

export default result;
