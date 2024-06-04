import baseClone from './.internal/baseClone.js';

/** Used to compose bitmasks for cloning. */
const CLONE_SYMBOLS_FLAG = 4;

/**
 * 这个方法类似_.clone，除了它接受一个 customizer 定制返回的克隆值。 如果 customizer 返回 undefined 将会使用拷贝方法代替处理。 customizer 调用4个参数： (value [, index|key, object, stack])。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to clone.
 * @param {Function} [customizer] The function to customize cloning.
 * @returns {*} Returns the cloned value.
 * @see cloneDeepWith
 * @example
 *
 * function customizer(value) {
 *   if (isElement(value)) {
 *     return value.cloneNode(false)
 *   }
 * }
 *
 * const el = cloneWith(document.body, customizer)
 *
 * console.log(el === document.body)
 * // => false
 * console.log(el.nodeName)
 * // => 'BODY'
 * console.log(el.childNodes.length)
 * // => 0
 */
function cloneWith(value:any, customizer:any) {
    customizer = typeof customizer === 'function' ? customizer : undefined;
    return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
}

export default cloneWith;
