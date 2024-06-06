import baseConformsTo from './.internal/baseConformsTo.js';
import keys from './keys.js';

/**
 * 通过调用断言source的属性与 object 的相应属性值，检查 object是否符合 source。当source偏应用时，这种方法和_.conforms函数是等价的。
 *
 * **Note:** 当source为偏应用时，这种方法等价于_.conforms。（注：关于偏应用大家可以自己到google上搜索一下）。
 *
 * @since 1.0.0
 * @category Lang
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property predicates to conform to.
 * @returns {boolean} Returns `true` if `object` conforms, else `false`.
 * @example
 *
 * const object = { 'a': 1, 'b': 2 }
 *
 * conformsTo(object, { 'b': function(n) { return n > 1 } })
 * // => true
 *
 * conformsTo(object, { 'b': function(n) { return n > 2 } })
 * // => false
 */
function conformsTo(object:any, source:any =null) {
    return source == null || baseConformsTo(object, source, keys(source));
}

export default conformsTo;
