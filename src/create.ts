/**
 * 创建一个继承 prototype 的对象。
 *  如果提供了 prototype，它的可枚举属性会被分配到创建的对象上。
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} prototype The object to inherit from.
 * @param {Object} [properties] The properties to assign to the object.
 * @returns {Object} Returns the new object.
 * @example
 *
 * function Shape() {
 *   this.x = 0
 *   this.y = 0
 * }
 *
 * function Circle() {
 *   Shape.call(this)
 * }
 *
 * Circle.prototype = create(Shape.prototype, {
 *   'constructor': Circle
 * })
 *
 * const circle = new Circle
 * circle instanceof Circle
 * // => true
 *
 * circle instanceof Shape
 * // => true
 */
function create(prototype:any, properties:any=null) {
    prototype = prototype === null ? null : Object(prototype);
    const result = Object.create(prototype);
    return properties == null ? result : Object.assign(result, properties);
}

export default create;
