var visit = require('unist-util-visit');

module.exports = attacher;
attacher.withInlineCodeLanguage = withInlineCodeLanguage;

function attacher(separator) {
  if (!separator) return;

  return transformer;

  function transformer(tree) {
    visit(tree, 'inlineCode', function visitor(node) {
      withInlineCodeLanguage(node, separator);
    });
  }
}

function withInlineCodeLanguage(node, separator) {
  const [language, code] = node.value.split(separator, 2);
  if (language && code) {
    node.value = code;
    node.lang = language.trim();
  }
  return node;
}
