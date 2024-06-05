import baseIsEqual from './.internal/baseIsEqual.js';

/**
 * 这个方法类似_.isEqual。 除了它接受一个 customizer 用来定制比较值。
 *  如果 customizer 返回 undefined 将会比较处理方法代替。
 *  customizer 会传入6个参数：(objValue, othValue [, index|key, object, other, stack])
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value)
 * }
 *
 * function customizer(objValue, othValue) {
 *   if (isGreeting(objValue) && isGreeting(othValue)) {
 *     return true
 *   }
 * }
 *
 * const array = ['hello', 'goodbye']
 * const other = ['hi', 'goodbye']
 *
 * isEqualWith(array, other, customizer)
 * // => true
 */
function isEqualWith(value, other, customizer):boolean {
    customizer = typeof customizer === 'function' ? customizer : undefined;
    const result = customizer ? customizer(value, other) : undefined;
    return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
}

export default isEqualWith;
