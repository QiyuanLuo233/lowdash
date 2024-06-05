import customDefaultsMerge from './.internal/customDefaultsMerge.js';
import mergeWith from './mergeWith.js';

/**
 * 这个方法类似_.defaults，除了它会递归分配默认属性。
 *
 * **Note:** 这方法会改变 object.
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see defaults
 * @example
 *
 * defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } })
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
function defaultsDeep(...args) {
    args.push(undefined, customDefaultsMerge);
    return mergeWith.apply(undefined, args);
}

export default defaultsDeep;
