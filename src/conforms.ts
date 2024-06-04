import baseClone from './.internal/baseClone.js';
import baseConforms from './.internal/baseConforms.js';

/** Used to compose bitmasks for cloning. */
const CLONE_DEEP_FLAG = 1;

/**
 * 创建一个函数。 这个函数会 调用 source 的属性名对应的 predicate 与传入对象相对应属性名的值进行断言处理。 如果都符合返回 true ，否则返回 false 。
 *
 * **Note:** 当source为偏应用时，这种方法等价于_.conformsTo。（注：关于偏应用大家可以自己到google上搜索一下）。
 *
 * @since 1.0.0
 * @category Util
 * @param {Object} source The object of property predicates to conform to.
 * @returns {Function} Returns the new spec function.
 * @example
 *
 * const objects = [
 *   { 'a': 2, 'b': 1 },
 *   { 'a': 1, 'b': 2 }
 * ]
 *
 * filter(objects, conforms({ 'b': function(n) { return n > 1 } }))
 * // => [{ 'a': 1, 'b': 2 }]
 */
function conforms(source:any) {
    return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
}

export default conforms;
