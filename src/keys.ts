import arrayLikeKeys from './.internal/arrayLikeKeys.js';
import isArrayLike from './isArrayLike.js';

/**
 * 创建一个 object 的自身可枚举属性名为数组。
 *
 * **Note:** 非对象的值会被强制转换为对象，查看ES spec 了解详情。
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @see values, valuesIn
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * keys(new Foo)
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * keys('hi')
 * // => ['0', '1']
 */
function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : Object.keys(Object(object));
}

export default keys;
