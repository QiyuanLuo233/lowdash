/**
 * 判断是否小于
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 * @see gt, gte, lte
 * @example
 *
 * lt(1, 3)
 * // => true
 *
 * lt(3, 3)
 * // => false
 *
 * lt(3, 1)
 * // => false
 */
function lt(value, other):boolean {
    if (!(typeof value === 'string' && typeof other === 'string')) {
        value = +value;
        other = +other;
    }
    return value < other;
}

export default lt;
