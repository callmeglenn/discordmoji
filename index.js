const { unicode } = require('./unicode')
/**
 * @returns ?Unicode/Guild Emoji
 * @param {Object} client Your client instance
 * @param {String} string The string which will be used to get the emoji from
 */
module.exports = function(client, string) {
    if (unicode.test(string)) return string
    array = string.split(':')
    element = array[array.length - 1]
    id = element.endsWith('>') ? element.substr(element.length - 1) : element
    return client.emojis.cache.get(id) ? client.emojis.cache.get(id) : null
}
