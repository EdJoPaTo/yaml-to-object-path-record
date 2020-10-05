# yaml-to-object-path-record

[![NPM Version](https://img.shields.io/npm/v/yaml-to-object-path-record.svg)](https://www.npmjs.com/package/yaml-to-object-path-record)
[![node](https://img.shields.io/node/v/yaml-to-object-path-record.svg)](https://www.npmjs.com/package/yaml-to-object-path-record)
[![Build Status](https://travis-ci.com/EdJoPaTo/yaml-to-object-path-record.svg?branch=master)](https://travis-ci.com/EdJoPaTo/yaml-to-object-path-record)
[![Dependency Status](https://david-dm.org/EdJoPaTo/yaml-to-object-path-record/status.svg)](https://david-dm.org/EdJoPaTo/yaml-to-object-path-record)
[![Dev Dependency Status](https://david-dm.org/EdJoPaTo/yaml-to-object-path-record/dev-status.svg)](https://david-dm.org/EdJoPaTo/yaml-to-object-path-record?type=dev)

> Parses yaml into a `Record<string, string>` with object paths as key

This is often useful when having translation files in yaml and access them by object path.
For example this is used in [telegraf-i18n](https://github.com/telegraf/telegraf-i18n).

The name of the package is inspired by the TypeScript type `Record<Key, Value>` as thats the structure of the result.
An object path is the path in dot notation needed to uniquely identify a key within the object.
For example `{some: {deep: {object: {structure: 'value'}}}}` would have `some.deep.object.structure` as object path.

## Install

```
$ npm install yaml-to-object-path-record
```


## Usage

```js
const yamlToObjectPathRecord = require('yaml-to-object-path-record');

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
