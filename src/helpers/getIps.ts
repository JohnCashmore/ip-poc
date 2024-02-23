import { FILE_NAME } from 'consts/file';
import fs from 'fs';
import { decrypt } from 'helpers/encryption';
import path from 'path';

export function getIps() {
	const file = fs.readFileSync(path.resolve(__dirname, '..', 'data', FILE_NAME), {
		encoding: 'utf8',
		flag: 'r',
	});

	return JSON.parse(decrypt(file)) as string[];
}
