import isArrayLike from './isArrayLike.js';
import isObjectLike from './isObjectLike.js';

/**
 * 这个方法类似_.isArrayLike。除了它还检查value是否是个对象。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * isArrayLikeObject([1, 2, 3])
 * // => true
 *
 * isArrayLikeObject(document.body.children)
 * // => true
 *
 * isArrayLikeObject('abc')
 * // => false
 *
 * isArrayLikeObject(Function)
 * // => false
 */
function isArrayLikeObject(value):boolean {
    return isObjectLike(value) && isArrayLike(value);
}

export default isArrayLikeObject;
