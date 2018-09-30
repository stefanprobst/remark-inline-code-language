var visit = require('unist-util-visit');

module.exports = attacher;

function attacher(separator) {
  if (!separator) return;

  return transformer;

  function transformer(tree) {
    visit(tree, 'inlineCode', visitor);

    function visitor(node) {
      const [language, code] = node.value.split(separator, 2);
      if (language && code) {
        node.value = code;
        node.lang = language.trim();
      }
    }
  }
}
