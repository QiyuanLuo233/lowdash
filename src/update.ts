import baseUpdate from './.internal/baseUpdate.js';

/**
 * 该方法类似_.set，除了接受updater以生成要设置的值。
 * 使用_.updateWith来自定义生成的新path。updater调用1个参数：(value)。
 *
 * **Note:** This method mutates `object`.
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {Function} updater The function to produce the updated value.
 * @returns {Object} Returns `object`.
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * update(object, 'a[0].b.c', n => n * n)
 * console.log(object.a[0].b.c)
 * // => 9
 *
 * update(object, 'x[0].y.z', n => n ? n + 1 : 0)
 * console.log(object.x[0].y.z)
 * // => 0
 */
function update(object, path, updater) {
    return object == null ? object : baseUpdate(object, path, updater);
}

export default update;
