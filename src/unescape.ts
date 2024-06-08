/** Used to map HTML entities to characters. */
const htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
};

/** Used to match HTML entities and HTML characters. */
const reEscapedHtml = /&(?:amp|lt|gt|quot|#(0+)?39);/g;
const reHasEscapedHtml = RegExp(reEscapedHtml.source);

/**
 * _.escape的反向版。 这个方法转换string字符串中的 HTML 实体 &amp;, 
 * &lt;, &gt;, &quot;, &#39;, 和 &#96; 为对应的字符。
 *
 * **Note:** 不会转换其他的 HTML 实体，需要转换可以使用第三方库，类似[_he_](https://mths.be/he).
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to unescape.
 * @returns {string} Returns the unescaped string.
 * @see escape, escapeRegExp
 * @example
 *
 * unescape('fred, barney, &amp; pebbles')
 * // => 'fred, barney, & pebbles'
 */
function unescape(string?:string):string {
    return string && reHasEscapedHtml.test(string)
        ? string.replace(reEscapedHtml, (entity) => htmlUnescapes[entity] || "'")
        : string || '';
}

export default unescape;
