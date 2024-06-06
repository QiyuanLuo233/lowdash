/**
 * 创建一个对象，这个对象的key与object对象相同，
 * 值是通过 iteratee 运行 object 中每个自身可枚举属性名字符串产生的。
 *  iteratee调用三个参数： (value, key, object)。
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see mapKeys
 * @example
 *
 * const users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * }
 *
 * mapValue(users, ({ age }) => age)
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValue(object, iteratee):any {
    object = Object(object);
    const result = {};

    Object.keys(object).forEach((key) => {
        result[key] = iteratee(object[key], key, object);
    });
    return result;
}

export default mapValue;
