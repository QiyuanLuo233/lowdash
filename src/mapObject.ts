/**
 * 创建一个数组， value（值） 是 iteratee（迭代函数）遍历 collection（集合）中的每个元素值后返回的结果。
 *  iteratee（迭代函数）调用3个参数：
(value, index|key, collection).
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * map({ 'a': 4, 'b': 8 }, square)
 * // => [16, 64] (iteration order is not guaranteed)
 */
function mapObject(object:any, iteratee:any):any [] {
    const props = Object.keys(object);
    const result = new Array(props.length);

    props.forEach((key, index) => {
        result[index] = iteratee(object[key], key, object);
    });
    return result;
}

export default mapObject;
