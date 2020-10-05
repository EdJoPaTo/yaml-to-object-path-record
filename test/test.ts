import test from 'ava';
import yamlToObjectPathRecord from '../source';

test('empty yaml', t => {
	t.deepEqual(yamlToObjectPathRecord(''), {});
});

test('flat key values', t => {
	const input = `
key: value
foo: bar
	`;
	t.deepEqual(yamlToObjectPathRecord(input), {
		key: 'value',
		foo: 'bar'
	});
});

test('deep key values', t => {
	const input = `
foo:
    bar: test please ignore
flat: value
	`;
	t.deepEqual(yamlToObjectPathRecord(input), {
		'foo.bar': 'test please ignore',
		flat: 'value'
	});
});

test('garbage input fails in yaml package', t => {
	t.throws(() => {
		yamlToObjectPathRecord(':');
	});
});
