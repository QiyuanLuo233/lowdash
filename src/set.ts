import baseSet from './.internal/baseSet.js';

/**
 * 设置 object对象中对应 path 属性路径上的值，如果path不存在，
 * 则创建。 缺少的索引属性会创建为数组，而缺少的属性会创建为对象。 使用_.setWith 定制path创建。
 *
 * **Note:** 这个方法会改变 object。
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @see has, hasIn, get, unset
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * set(object, 'a[0].b.c', 4)
 * console.log(object.a[0].b.c)
 * // => 4
 *
 * set(object, ['x', '0', 'y', 'z'], 5)
 * console.log(object.x[0].y.z)
 * // => 5
 */
function set(object, path, value):any {
    return object == null ? object : baseSet(object, path, value);
}

export default set;
