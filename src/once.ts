import before from './before.js';

/**
 * 创建一个只能调用 func 一次的函数。 重复调用返回第一次调用的结果。
 * func 调用时， this 绑定到创建的函数，并传入对应参数。基于_.before，
 * 不如直接用这个，设置次数即可。
 *
 * @since 1.0.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * const initialize = once(createApplication)
 * initialize()
 * initialize()
 * // => `createApplication` is invoked once
 */
function once(func) {
    return before(2, func);
}

export default once;
