import toFinite from './toFinite.js';

/** Built-in method references without a dependency on `root`. */
const freeParseFloat = parseFloat;

/**
 * 产生一个包括 lower 与 upper 之间的数。
 *  如果只提供一个参数返回一个0到提供数之间的数。 
 * 如果 floating 设为 true，或者 lower 或 upper 是浮点数，结果返回浮点数。
 *
 * **Note:** JavaScript 遵循 IEEE-754 标准处理无法预料的浮点数结果。
 *
 * @since 1.0.0
 * @category Number
 * @param {number} [lower=0] The lower bound.
 * @param {number} [upper=1] The upper bound.
 * @param {boolean} [floating] Specify returning a floating-point number.
 * @returns {number} Returns the random number.
 * @see uniqueId
 * @example
 *
 * random(0, 5)
 * // => an integer between 0 and 5
 *
 * random(5)
 * // => also an integer between 0 and 5
 *
 * random(5, true)
 * // => a floating-point number between 0 and 5
 *
 * random(1.2, 5.2)
 * // => a floating-point number between 1.2 and 5.2
 */
function random(lower:number|any, upper, floating:boolean) {
    if (floating === undefined) {
        if (typeof upper === 'boolean') {
            floating = upper;
            upper = undefined;
        } else if (typeof lower === 'boolean') {
            floating = lower;
            lower = undefined;
        }
    }
    if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
    } else {
        lower = toFinite(lower);
        if (upper === undefined) {
            upper = lower;
            lower = 0;
        } else {
            upper = toFinite(upper);
        }
    }
    if (lower > upper) {
        const temp = lower;
        lower = upper;
        upper = temp;
    }
    if (floating || lower % 1 || upper % 1) {
        const rand = Math.random();
        const randLength = `${rand}`.length - 1;
        return Math.min(lower + rand * (upper - lower + freeParseFloat(`1e-${randLength}`)), upper);
    }
    return lower + Math.floor(Math.random() * (upper - lower + 1));
}

export default random;
