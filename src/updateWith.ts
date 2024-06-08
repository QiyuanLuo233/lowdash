import baseUpdate from './.internal/baseUpdate.js';

/**
 * 该方法类似_.update，不同之处在于它接受customizer，
 * 调用来生成新的对象的path。如果customizer返回undefined，路径创建由该方法代替。
 * customizer调用有三个参数：(nsValue, key, nsObject) 。
 *
 * **Note:** 这个方法会改变源对象 object。
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {Function} updater The function to produce the updated value.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * const object = {}
 *
 * updateWith(object, '[0][1]', () => 'a', Object)
 * // => { '0': { '1': 'a' } }
 */
function updateWith(object, path, updater, customizer) {
    customizer = typeof customizer === 'function' ? customizer : undefined;
    return object == null ? object : baseUpdate(object, path, updater, customizer);
}

export default updateWith;
