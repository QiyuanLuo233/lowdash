/**
 * 创建一个 object 自身 和 继承的可枚举属性名为数组。
 *
 *NOTE** 非对象的值会被强制转换为对象。
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
    const result:any [] = [];
    for (const key in object) {
        result.push(key);
    }
    return result;
}

export default keysIn;
