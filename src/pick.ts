import basePick from './.internal/basePick.js';

/**
 * 创建一个从 object 中选中的属性的对象。
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 }
 *
 * pick(object, ['a', 'c'])
 * // => { 'a': 1, 'c': 3 }
 */
function pick(object, ...paths) {
    return object == null ? {} : basePick(object, paths);
}

export default pick;
