# remark-inline-code-language

[Remark](https://remark.js.org/) plugin that allows passing a language to inline code. This is useful for syntax highlighting. Note: This is non-standard.

## Usage

```markdown
This is `js^const inline = 'code';`.
```

```js
const separator = '^';
processor.use(require('remark-inline-code-language'), separator);
```

## Example

```js
const unified = require('unified');
const markdown = require('remark-parse');
const inlineCodeLanguage = require('remark-inline-code-language');

const mdast = unified()
  .use(markdown, { position: false })
  .parse('This is `js^const inline = "code";`.');

const transformedAst = unified()
  .use(inlineCodeLanguage, '^')
  .runSync(mdast);

console.log(transformedAst.children[0].children);
// [ { type: 'text', value: 'This is ' },
//   { type: 'inlineCode',
//     value: 'const inline = "code";',
//     lang: 'js' },
//   { type: 'text', value: '.' } ]
```
