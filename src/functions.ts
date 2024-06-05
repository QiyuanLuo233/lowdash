/**
 * 创建一个函数属性名称的数组，函数属性名称来自object对象自身可枚举属性。
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns the function names.
 * @see functionsIn
 * @example
 *
 * function Foo() {
 *   this.a = () => 'a'
 *   this.b = () => 'b'
 * }
 *
 * Foo.prototype.c = () => 'c'
 *
 * functions(new Foo)
 * // => ['a', 'b']
 */
function functions(object):any [] {
    if (object == null) {
        return [];
    }
    return Object.keys(object).filter((key) => typeof object[key] === 'function');
}

export default functions;
