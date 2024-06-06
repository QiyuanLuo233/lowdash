/**
 * 反向版_.mapValues。 这个方法创建一个对象，对象的值与object相同，
 * 并且 key 是通过 iteratee 运行 object 中每个自身可枚举属性名字符串 产生的。
 * iteratee调用三个参数： (value, key, object)。
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see mapValue
 * @example
 *
 * mapKey({ 'a': 1, 'b': 2 }, function(value, key) {
 *   return key + value
 * })
 * // => { 'a1': 1, 'b2': 2 }
 */
function mapKey(object:any, iteratee:any) {
    object = Object(object);
    const result = {};

    Object.keys(object).forEach((key) => {
        const value = object[key];
        result[iteratee(value, key, object)] = value;
    });
    return result;
}

export default mapKey;
