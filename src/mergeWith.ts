import baseMerge from './.internal/baseMerge.js';
import createAssigner from './.internal/createAssigner.js';

/**
 * 该方法类似_.merge，除了它接受一个 customizer，
 * 调用以产生目标对象和来源对象属性的合并值。
 * 如果customizer 返回 undefined，将会由合并处理方法代替。
 * customizer调用与7个参数：(objValue, srcValue, key, object, source, stack)。
 *
 * **Note:** 这方法会改变对象 object.
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (Array.isArray(objValue)) {
 *     return objValue.concat(srcValue)
 *   }
 * }
 *
 * const object = { 'a': [1], 'b': [2] }
 * const other = { 'a': [3], 'b': [4] }
 *
 * mergeWith(object, other, customizer)
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
const mergeWith = createAssigner((object, source, srcIndex, customizer?:any) => {
    baseMerge(object, source, srcIndex, customizer);
});

export default mergeWith;
