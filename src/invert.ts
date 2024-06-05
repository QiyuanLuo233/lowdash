const toString = Object.prototype.toString;

/**
 * 创建一个object键值倒置后的对象。 
 * 如果 object 有重复的值，后面的值会覆盖前面的值。
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the new inverted object.返回新的键值倒置后的对象
 * @example
 *
 * const object = { 'a': 1, 'b': 2, 'c': 1 }
 *
 * invert(object)
 * // => { '1': 'c', '2': 'b' }
 */
function invert(object:any):any {
    const result = {};
    Object.keys(object).forEach((key) => {
        let value = object[key];
        if (value != null && typeof value.toString !== 'function') {
            value = toString.call(value);
        }
        result[value] = key;
    });
    return result;
}

export default invert;
