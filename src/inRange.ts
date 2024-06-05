import baseInRange from './.internal/baseInRange.js';
import toFinite from './toFinite';
import toNumber from './toNumber';

/**
 * 检查 n 是否在 start 与 end 之间，但不包括 end。
 *  如果 end 没有指定，那么 start 设置为0。
 *  如果 start 大于 end，那么参数会交换以便支持负范围。
 *
 * @since 1.0.0
 * @category Number
 * @param {number} number The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 * @see range, rangeRight
 * @example
 *
 * inRange(3, 2, 4)
 * // => true
 *
 * inRange(4, 8)
 * // => true
 *
 * inRange(4, 2)
 * // => false
 *
 * inRange(2, 2)
 * // => false
 *
 * inRange(1.2, 2)
 * // => true
 *
 * inRange(5.2, 4)
 * // => false
 *
 * inRange(-3, -2, -6)
 * // => true
 */
function inRange(number:number, start:number = 0, end?:number):boolean {
    start = toFinite(start);
    if (end === undefined) {
        end = start;
        start = 0;
    } else {
        end = toFinite(end);
    }
    number = toNumber(number);
    return baseInRange(number, start, end);
}

export default inRange;
