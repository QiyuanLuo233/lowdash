import getTag from './.internal/getTag.js';

/**
 *检查 value 是否是原始 Symbol 或者对象。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('abc')
 * // => false
 */
function isSymbol(value):boolean {
    const type = typeof value;
    return (
        type === 'symbol' ||
        (type === 'object' && value != null && getTag(value) === '[object Symbol]')
    );
}

export default isSymbol;
