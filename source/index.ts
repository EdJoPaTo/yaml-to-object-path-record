import * as yaml from 'js-yaml';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tableize = require('tableize-object');

export default function yamlToObjectPathRecord(yamlString: string): Record<string, string> {
	const yamlObject = yaml.safeLoad(yamlString);
	const record: Record<string, string> = tableize(yamlObject);
	return record;
}

// For CommonJS default export support
/* eslint @typescript-eslint/no-unsafe-member-access: off */
module.exports = yamlToObjectPathRecord;
module.exports.default = yamlToObjectPathRecord;
