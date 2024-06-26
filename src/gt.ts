/**
 * 比较值是否比其他大
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 * @see gte, lt, lte
 * @example
 *
 * gt(3, 1)
 * // => true
 *
 * gt(3, 3)
 * // => false
 *
 * gt(1, 3)
 * // => false
 */
function gt(value:string | number, other:any):boolean {
    if (!(typeof value === 'string' && typeof other === 'string')) {
        value = +value;
        other = +other;
    }
    return value > other;
}

export default gt;
