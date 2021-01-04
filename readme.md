# yaml-to-object-path-record

> Parses yaml into a `Record<string, string>` with object paths as key

This is often useful when having translation files in yaml and access them by object path.
For example this is used in [telegraf-i18n](https://github.com/telegraf/telegraf-i18n).

The name is inspired by the TypeScript type `Record<Key, Value>` as thats the structure of the result.
An object path is the path in dot notation needed to uniquely identify a key within the object.
For example `{some: {deep: {object: {structure: 'value'}}}}` would have `some.deep.object.structure` as object path.

## Just implement it yourself

```bash
$ npm install js-yaml tableize-object
$ npm install --save-dev types/js-yaml
```

### JavaScript

```js
const tableize = require('tableize-object');
const yaml = require('js-yaml');

function yamlToObjectPathRecord(yamlString) {
	const yamlObject = yaml.load(yamlString);
	const record = tableize(yamlObject);
	return record;
}
```

### Typescript

```ts
import * as yaml from 'js-yaml';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tableize = require('tableize-object');

function yamlToObjectPathRecord(yamlString: string): Record<string, string> {
	const yamlObject = yaml.load(yamlString);
	const record: Record<string, string> = tableize(yamlObject);
	return record;
}
```

### Example

```js
const yamlString = `
foo: bar
some: value
something:
	deep: 'is a path'
	else: 'also works'
`;

yamlToObjectPathRecord('unicorns');
//=> {foo: 'bar', some: 'value', 'something.deep': 'is a path', 'something.else': 'also works'}
```
