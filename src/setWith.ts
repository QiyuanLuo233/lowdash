import baseSet from './.internal/baseSet.js';

/**
 * 这个方法类似_.set，除了它接受一个 customizer，调用生成对象的 path。
 *  如果 customizer 返回 undefined 将会有它的处理方法代替。
 *  customizer 调用3个参数： (nsValue, key, nsObject)。
 *
 * **Note:** 这个方法会改变 object。
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * const object = {}
 *
 * setWith(object, '[0][1]', 'a', Object)
 * // => { '0': { '1': 'a' } }
 */
function setWith(object, path, value, customizer) {
    customizer = typeof customizer === 'function' ? customizer : undefined;
    return object == null ? object : baseSet(object, path, value, customizer);
}

export default setWith;
