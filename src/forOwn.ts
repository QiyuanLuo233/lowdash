/**
 * 使用 iteratee 遍历自身的可枚举属性。
 *  iteratee 会传入3个参数：(value, key, object)。 
 * 如果返回 false，iteratee 会提前退出遍历。
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @see forEach, forEachRight, forIn, forInRight, forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * forOwn(new Foo, function(value, key) {
 *   console.log(key)
 * })
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object:any, iteratee:any) {
    object = Object(object);
    Object.keys(object).forEach((key) => iteratee(object[key], key, object));
}

export default forOwn;
