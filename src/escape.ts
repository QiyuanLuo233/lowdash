/** Used to map characters to HTML entities. */
const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
};

/** Used to match HTML entities and HTML characters. */
const reUnescapedHtml = /[&<>"']/g;
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/**
 * 转义string中的 "&", "<", ">", '"', "'", 和 "`" 字符为HTML实体字符。
 *
 * **Note:** 不会转义其他字符。如果需要，可以使用第三方库，例如he。

虽然 ">" 是对称转义的，字符如 ">" 和 "/" 没有特殊的意义，所以不需要在 HTML 转义。 除非它们是标签的一部分，或者是不带引号的属性值。 查看Mathias Bynens's article 的文章 (under "semi-related fun fact") 了解详情 。

在 IE < 9 中转义引号，因为会中断属性值或 HTML 注释，查看HTML5 Security Cheatsheet 的#59,#102,#108, 和#133, 以及#133 了解详情。

当解析 HTML 时，总应该在属性值上使用引号 以减少 XSS 的可能性。
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @see escapeRegExp, unescape
 * @example
 *
 * escape('fred, barney, & pebbles')
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string:string) {
    return string && reHasUnescapedHtml.test(string)
        ? string.replace(reUnescapedHtml, (chr) => htmlEscapes[chr])
        : string || '';
}

export default escape;
