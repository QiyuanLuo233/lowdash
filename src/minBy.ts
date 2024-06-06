import isSymbol from './isSymbol.js';

/**
 * 这个方法类似_.min 除了它接受 iteratee 来调用 array中的每一个元素，
 * 来生成其值排序的标准。 iteratee 会调用1个参数: (value) 。
 *
 * @since 1.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * const objects = [{ 'n': 1 }, { 'n': 2 }]
 *
 * minBy(objects, ({ n }) => n)
 * // => { 'n': 1 }
 */
function minBy(array:any [], iteratee):number {
    let result;
    if (array == null) {
        return result;
    }
    let computed;
    for (const value of array) {
        const current = iteratee(value);

        if (
            current != null &&
            (computed === undefined
                ? current === current && !isSymbol(current)
                : current < computed)
        ) {
            computed = current;
            result = value;
        }
    }
    return result;
}

export default minBy;
